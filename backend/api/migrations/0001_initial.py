# Generated by Django 3.1.3 on 2020-11-12 18:51

from django.db import migrations, models
import django.db.models.deletion
import imagekit.models.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Author',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='name')),
                ('born', models.DateField(verbose_name='born')),
                ('died', models.DateField(verbose_name='died')),
                ('image', imagekit.models.fields.ProcessedImageField(upload_to='cars')),
            ],
        ),
        migrations.CreateModel(
            name='Type',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=100, verbose_name='type')),
            ],
        ),
        migrations.CreateModel(
            name='Art',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='title')),
                ('year', models.DateField(verbose_name='year created')),
                ('image', imagekit.models.fields.ProcessedImageField(upload_to='cars')),
                ('body', models.TextField(verbose_name='body')),
                ('reason', models.TextField(blank=True, null=True, verbose_name='reason')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='works', to='api.author')),
                ('type', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='works', to='api.type')),
            ],
        ),
    ]
