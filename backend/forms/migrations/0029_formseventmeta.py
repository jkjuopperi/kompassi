# Generated by Django 5.0.9 on 2024-10-24 20:53

import django.db.models.deletion
from django.db import migrations, models

import core.models.group_management_mixin


class Migration(migrations.Migration):
    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
        ("core", "0040_rename_emailverificationtoken_person_state_core_emailv_person__722147_idx_and_more"),
        ("forms", "0028_keypair"),
    ]

    operations = [
        migrations.CreateModel(
            name="FormsEventMeta",
            fields=[
                (
                    "event",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        primary_key=True,
                        related_name="%(class)s",
                        serialize=False,
                        to="core.event",
                    ),
                ),
                ("admin_group", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to="auth.group")),
            ],
            options={
                "abstract": False,
            },
            bases=(models.Model, core.models.group_management_mixin.GroupManagementMixin),
        ),
    ]
