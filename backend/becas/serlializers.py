from rest_framework import serializers
from .models import Beca

class BecaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beca
        fields = ['nombre', 'categoria', 'porcentaje_financia', 'pais', 'universidad', 'reqerimientos', 'popularidad']

        