# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-27 17:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kawacon2016', '0002_auto_20160127_1922'),
    ]

    operations = [
        migrations.AlterField(
            model_name='signupextra',
            name='needs_lodging',
            field=models.ManyToManyField(blank=True, help_text='V\xe4nk\xe4rin\xe4 saat tarvittaessa maksuttoman majoituksen lattiamajoituksessa. Merkitse t\xe4h\xe4n, min\xe4 \xf6in\xe4 tarvitset lattiamajoitusta.', to='kawacon2016.Night', verbose_name='Majoitustarve lattiamajoituksessa'),
        ),
    ]