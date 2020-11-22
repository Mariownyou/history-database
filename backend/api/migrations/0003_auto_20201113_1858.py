# Generated by Django 3.1.3 on 2020-11-13 18:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20201113_1856'),
    ]

    operations = [
        migrations.AlterField(
            model_name='art',
            name='author_info',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='info', to='api.author'),
        ),
    ]