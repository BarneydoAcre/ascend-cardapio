from django.contrib import admin
from . import models

admin.site.register(models.Prato)
admin.site.register(models.Pedido)
admin.site.register(models.Gerencial)