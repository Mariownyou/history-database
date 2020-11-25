from django.db import models
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFit, Adjust, ResizeToFill

# Create your models here.


class Year(models.Model):
    year = models.IntegerField('year', primary_key=True, unique=True)

    class Meta:
        ordering = ['year']

    def __str__(self):
        year = str(self.year)
        return year


class Author(models.Model):
    name = models.CharField('name', max_length=100)
    born = models.ForeignKey(Year, on_delete=models.CASCADE, related_name='born')
    died = models.ForeignKey(Year, on_delete=models.CASCADE, related_name='died')
    image = ProcessedImageField(
        upload_to='authors',
        processors=[ResizeToFit(400, 400)],
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
    date = models.DateField('date created', null=True, blank=True)
    year = models.ForeignKey(Year, on_delete=models.CASCADE, related_name='works')
    city = models.ForeignKey(City, on_delete=models.CASCADE, related_name='works')
    authors = models.ManyToManyField(Author, blank=True, null=True)
    image = ProcessedImageField(
        upload_to='works',
        processors=[ResizeToFit(600, 400)],
        format='JPEG',
        options={'quality': 100},
    )
    body = models.TextField('body')
    reason = models.TextField('reason', blank=True, null=True)
    type = models.ForeignKey(Type, on_delete=models.CASCADE, related_name='works')

    class Meta:
        ordering = ['year']

    def __str__(self):
        title = self.title
        return title
