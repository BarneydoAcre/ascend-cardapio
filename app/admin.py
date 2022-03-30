from django.contrib import admin
from . import models

admin.site.register(models.Produto)
admin.site.register(models.Pedido)
admin.site.register(models.Gerencial)