from django.db import models

# Create your models here.
class Beca(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=50)
    categoria = models.CharField(max_length=50)
    porcentaje_financia = models.CharField(max_length=50)
    pais = models.CharField(max_length=50)
    universidad = models.CharField(max_length=50)
    requerimientos = models.CharField(max_length=250)
    popularidad = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.nombre