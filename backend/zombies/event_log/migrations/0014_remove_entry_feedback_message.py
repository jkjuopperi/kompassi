# Generated by Django 5.0.7 on 2024-07-30 13:48

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("event_log", "0013_alter_entry_created_by_delete_subscription"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="entry",
            name="feedback_message",
        ),
    ]
