from django.db import models

# Create your models here.
class Beca(models.Model):
    nombre = models.CharField(max_length=50)
    categoria = models.CharField(max_length=50)
    porcentaje_financia = models.CharField(max_length=50)
    pais = models.CharField(max_length=50)
    universidad = models.CharField(max_length=50)
    reqerimientos = models.CharField(max_length=250)
    popularidad = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.nombre