from rest_framework import serializers
from .models import Art, Author, Type


class AuthorSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Author
        fields = ('url', 'name')      


class WorkDetailSerializer(serializers.HyperlinkedModelSerializer):
    author_info = AuthorSerializer(read_only=True)
    year = serializers.DateField(format="%d.%m.%Y")
    class Meta:
        model = Art
        # fields = ('url', 'id', 'title', 'year', 'author', 'body', 'reason', 'type', 'image')
        fields = '__all__'
 

class WorkSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Art
        fields = ('url', 'id', 'author', 'year', 'image')


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