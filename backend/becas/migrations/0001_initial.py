# Generated by Django 4.0.4 on 2022-05-14 21:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Beca',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
                ('categoria', models.CharField(max_length=50)),
                ('porcentaje_financia', models.CharField(max_length=50)),
                ('pais', models.CharField(max_length=50)),
                ('universidad', models.CharField(max_length=50)),
                ('reqerimientos', models.CharField(max_length=250)),
                ('popularidad', models.CharField(max_length=50)),
            ],
        ),
    ]
