# Generated by Django 3.1.3 on 2020-11-22 15:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20201122_1428'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='art',
            name='author_info',
        ),
    ]