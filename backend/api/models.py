from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit, Adjust, ResizeToFill

# Create your models here.
class Author(models.Model):
    name = models.CharField('name', max_length=100)
    born = models.DateField('born')
    died = models.DateField('died')
    image = ProcessedImageField(
        upload_to='authors',
        processors=[ResizeToFill(100, 100)],
        format='JPEG',
        options={'quality': 100},
        blank=True, null=True
    )

    def __str__(self):
        name = self.name
        return name


class Type(models.Model):
    type = models.CharField('type', max_length=100)

    def __str__(self):
        type = self.type
        return type


class City(models.Model):
    city = models.CharField('city', max_length=200)

    def __str__(self):
        city = self.city
        return city


class Art(models.Model):
    title = models.CharField('title', max_length=200)
    year = models.DateField('year created')
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='works')
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='works')
    author_info = models.ForeignKey(Author, on_delete=models.SET_NULL, related_name='info', null=True, blank=True)
    image = ProcessedImageField(
        upload_to='works',
        processors=[ResizeToFill(300, 200)],
        format='JPEG',
        options={'quality': 100},
    )
    body = models.TextField('body')
    reason = models.TextField('reason', blank=True, null=True)
    type = models.ForeignKey(Type, on_delete=models.CASCADE, related_name='works')
