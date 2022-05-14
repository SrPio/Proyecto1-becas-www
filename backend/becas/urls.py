from django.urls import include, path
from becas.views import BecasViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'beca', BecasViewSet)

urlpatterns = [
    path('', include(router.urls)),  
]