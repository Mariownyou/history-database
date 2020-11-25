from django.urls import include, path
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'works', views.WorksViewSet)
router.register(r'authors', views.AuthorsViewSet)
router.register(r'types', views.TypesViewSet)
router.register(r'cities', views.CityViewSet)
router.register(r'years', views.YearsViewSet)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]