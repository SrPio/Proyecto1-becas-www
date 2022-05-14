from django.shortcuts import render
from .models import Beca
from .serlializers import BecaSerializer
from rest_framework import viewsets

# Create your views here.
class BecasViewSet(viewsets.ModelViewSet):
   queryset = Beca.objects.all()
   serializer_class = BecaSerializer
