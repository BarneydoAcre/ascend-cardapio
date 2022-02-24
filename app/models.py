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
    cpf = models.CharField(max_length = 14)
    prato = models.IntegerField()
    valor = models.DecimalField(max_digits = 8, decimal_places = 2)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)