# Generated by Django 3.1.3 on 2020-11-25 13:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_art_authors'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='art',
            name='author',
        ),
    ]
