# encoding: utf-8
from collections import namedtuple

import csv

from django.http import HttpResponse
from django.db import models


ENCODING = 'ISO-8859-15'


ExportFormat = namedtuple('ExportFormat', [
    'name',
    'csv_dialect',
    'extension',
])

# TODO better naming
EXPORT_FORMATS = [
    ExportFormat('XLSX', 'xlsx', 'xlsx'),
    ExportFormat('CSV', 'excel', 'csv'),
    ExportFormat('TSV', 'excel-tab', 'tsv'),
]

# Deprecated
CSV_EXPORT_FORMATS = dict(
    csv='excel',
    tsv='excel-tab',
    xlsx='xlsx',
)


class CsvExportMixin(object):
    @classmethod
    def get_csv_fields(cls, event):
        fields = []

        for field in cls._meta.fields:
            if not isinstance(field, models.ForeignKey):
                fields.append((cls, field))

        for field, unused in cls._meta.get_m2m_with_model():
            fields.append((cls, field))

        return fields

    def get_csv_related(self):
        return dict()

    def get_csv_row(self, event, fields, m2m_mode='separate_columns'):
        result_row = []
        related = self.get_csv_related()

        for model, field in fields:
            if isinstance(field, str):
                field_name = field
                field_type = None
            else:
                field_name = field.name
                field_type = type(field)

            if model in related:
                source_instance = related.get(model, None)
            else:
                source_instance = self

            field_value = getattr(source_instance, field_name) if source_instance is not None else None

            if field_type is models.ManyToManyField and field_value is not None:
                if m2m_mode == 'separate_columns':
                    choices = get_m2m_choices(event, field)

                    result_row.extend(
                        field_value.filter(pk=choice.pk).exists()
                        for choice in choices
                    )
                elif m2m_mode == 'comma_separated':
                    result_row.append(', '.join(item.__str__() for item in field_value.all()))
                else:
                    raise NotImplemented(m2m_mode)
            elif field_type is models.DateTimeField and field_value is not None:
                from django.utils.timezone import localtime
                result_row.append(localtime(field_value).replace(tzinfo=None))
            else:
                result_row.append(field_value)

        return result_row


def write_header_row(event, writer, fields, m2m_mode='separate_columns'):
    header_row = []

    for (model, field) in fields:
        if isinstance(field, str):
            field_name = field
            field_type = None
        else:
            field_name = field.name
            field_type = type(field)

        if field_type == models.ManyToManyField:
            if m2m_mode == 'separate_columns':
                choices = get_m2m_choices(event, field)
                header_row.extend(
                    "{field_name}: {choice}"
                    .format(field_name=field_name, choice=choice.__str__())
                    for choice in choices
                )
            elif m2m_mode == 'comma_separated':
                header_row.append(field_name)
            else:
                raise NotImplemented(m2m_mode)
        else:
            header_row.append(field_name)

    writer.writerow(header_row)


def get_m2m_choices(event, field):
    target_model = field.rel.to
    cache_key = (event.id, target_model._meta.app_label, target_model._meta.model_name)

    if cache_key not in get_m2m_choices.cache:

        if any(f.name == 'event' for f in target_model._meta.fields):
            choices = target_model.objects.filter(event=event)
        else:
            choices = target_model.objects.all()

        get_m2m_choices.cache[cache_key] = choices.order_by('pk')

    return get_m2m_choices.cache[cache_key]
get_m2m_choices.cache = {}


def write_row(event, writer, fields, model_instance, m2m_mode):
    result_row = model_instance.get_csv_row(event, fields, m2m_mode)
    writer.writerow(result_row)


def make_writer(output_stream, dialect):
    if dialect == 'xlsx':
        from .excel_export import XlsxWriter
        return XlsxWriter(output_stream)
    else:
        return csv.writer(output_stream, encoding=ENCODING, dialect=dialect, errors='ignore')


def export_csv(event, model, model_instances, output_file, m2m_mode='separate_columns', dialect='excel-tab'):
    fields = model.get_csv_fields(event)
    writer = make_writer(output_file, dialect)

    write_header_row(event, writer, fields, m2m_mode)

    for model_instance in model_instances:
        if isinstance(model_instance, (str, int)):
            model_instance = model.objects.get(pk=int(model_instances))

        write_row(event, writer, fields, model_instance, m2m_mode)

    if getattr(writer, 'must_close', False):
        writer.close()


CONTENT_TYPES = dict(
    xlsx='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
)


def csv_response(*args, **kwargs):
    filename = kwargs.pop('filename')
    dialect = kwargs.get('dialect', 'excel')

    response = HttpResponse(content_type=CONTENT_TYPES.get(dialect, 'text/csv'))
    response['Content-Disposition'] = 'attachment; filename="{filename}"'.format(
        filename=filename
    )

    kwargs['output_file'] = response

    export_csv(*args, **kwargs)

    return response
