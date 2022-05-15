from rest_framework import serializers
from .models import Beca

class BecaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beca
        fields = ['id', 'nombre', 'categoria', 'porcentaje_financia', 'pais', 'universidad', 'requerimientos', 'popularidad']

        