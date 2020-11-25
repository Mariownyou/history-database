from rest_framework import serializers
from .models import Art, Author, Type, City


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('url', 'name')     


class WorkDetailSerializer(serializers.HyperlinkedModelSerializer):
    date = serializers.DateField(format="%d.%m.%Y")
    authors = AuthorSerializer(many=True, read_only=True)
    city = serializers.StringRelatedField()
    type = serializers.StringRelatedField()
    
    class Meta:
        model = Art
        # fields = ('url', 'id', 'title', 'year', 'author', 'body', 'reason', 'type', 'image')
        fields = '__all__'
 

class WorkSerializer(serializers.ModelSerializer):
    date = serializers.DateField(format="%d.%m.%Y")
    authors = AuthorSerializer(many=True, read_only=True)
    city = serializers.StringRelatedField()
    class Meta:
        model = Art
        fields = ('url', 'id', 'authors', 'year', 'date', 'image', 'city', 'title')


class WorkCreateSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Art
        fields = '__all__'


class AuthorDetailSerializer(serializers.HyperlinkedModelSerializer):
    # photos = serializers.StringRelatedField(many=True)
    works = WorkSerializer(many=True, read_only=True)
    class Meta:
        model = Author
        fields = ('url', 'id', 'name', 'born', 'died', 'image', 'works')


class TypeSerializer(serializers.HyperlinkedModelSerializer):
    works = WorkSerializer(many=True, read_only=True)
    class Meta:
        model = Type
        fields = ('type', 'works')


class CitySerializer(serializers.HyperlinkedModelSerializer):
    works = WorkSerializer(many=True, read_only=True)
    class Meta:
        model = City
        fields = ('city', 'works')
