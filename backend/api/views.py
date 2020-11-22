from rest_framework import viewsets
from rest_framework import permissions
from .serializers import WorkDetailSerializer, AuthorDetailSerializer, TypeSerializer

from .models import Art, Author, Type


class AuthorsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Author.objects.all()
    serializer_class = AuthorDetailSerializer


class WorksViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Art.objects.all()
    serializer_class = WorkDetailSerializer


class TypesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Type.objects.all()
    serializer_class = TypeSerializer