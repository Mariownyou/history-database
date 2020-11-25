from rest_framework import viewsets
from rest_framework import permissions
from .serializers import WorkDetailSerializer, WorkSerializer, WorkCreateSerializer, AuthorDetailSerializer, TypeSerializer, CitySerializer, YearSerializer

from .models import Art, Author, Type, City, Year


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

    def get_serializer_class(self):
        if self.action == 'list':
            return WorkSerializer
        if self.action == 'retrieve':
            return WorkDetailSerializer
        return WorkCreateSerializer


class TypesViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Type.objects.all()
    serializer_class = TypeSerializer


class CityViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = City.objects.all()
    serializer_class = CitySerializer


class YearsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows posts to be viewed or edited.
    """
    queryset = Year.objects.all()
    serializer_class = YearSerializer
