# Generated by Django 4.0.6 on 2022-08-23 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0036_remove_event_panel_css_class_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='organization',
            name='panel_css_class',
            field=models.CharField(blank=True, choices=[('panel-default', 'Harmaa'), ('panel-primary', 'Kompassi (turkoosi)'), ('panel-success', 'Desucon (vihreä)'), ('panel-info', 'Yukicon (vaaleansininen)'), ('panel-warning', 'Popcult (oranssi)'), ('panel-danger', 'Tracon (punainen)'), ('panel-ropecon panel-default', 'Ropecon (violetti)')], default='panel-default', max_length=255, verbose_name='Etusivun paneelin väri'),
        ),
    ]