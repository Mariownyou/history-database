# Generated by Django 3.1.3 on 2020-11-25 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_auto_20201125_1257'),
    ]

    operations = [
        migrations.AddField(
            model_name='art',
            name='authors',
            field=models.ManyToManyField(blank=True, null=True, to='api.Author'),
        ),
    ]