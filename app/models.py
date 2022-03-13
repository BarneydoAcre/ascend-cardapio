from tabnanny import verbose
from django.db import models

class Prato(models.Model):
    name = models.CharField(max_length = 30)
    desc = models.CharField(max_length = 60)
    ingredients = models.CharField(max_length = 100)
    value = models.FloatField()

    # image = models.FileField(upload_to='app/static/public/cardapio/', blank=True)
    image = models.TextField(max_length=255, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Pedido(models.Model):
    prato = models.ForeignKey('Prato', verbose_name="Prato", on_delete=models.PROTECT)
    cpf = models.CharField(max_length = 14)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)