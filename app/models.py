from django.db import models

class Prato(models.Model):
    nome = models.CharField(max_length = 30)
    descricao = models.CharField(max_length = 60)
    ingredients = models.CharField(max_length = 100)
    valor = models.FloatField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.nome

class Pedido(models.Model):
    cpf = models.CharField(max_length = 14)
    prato = models.IntegerField()
    valor = models.DecimalField(max_digits = 8, decimal_places = 2)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)