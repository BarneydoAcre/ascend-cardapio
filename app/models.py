from django.db import models

class Prato(models.Model):
    name = models.CharField(verbose_name="Nome", max_length = 30)
    desc = models.CharField(verbose_name="Descrição", max_length = 60)
    ingredients = models.CharField(verbose_name="Ingredientes", max_length = 100)
    value = models.FloatField(verbose_name="Valor")
    disponibilidade = models.BooleanField(verbose_name="Disponível", default=True)

    # image = models.FileField(upload_to='app/static/public/cardapio/', blank=True)
    image = models.TextField(verbose_name="Imagem", max_length=255, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Pedido(models.Model):
    prato = models.ForeignKey('Prato', verbose_name="Prato", on_delete=models.PROTECT)
    cpf = models.CharField(max_length = 14)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

class Gerencial(models.Model):
    abertura = models.IntegerField(verbose_name='Abertura', default=18)
    fechamento = models.IntegerField(verbose_name='Fechamento', default=22)

    logo = models.TextField(verbose_name="Icone Logo", blank=True)
    nome_estabelecimento = models.CharField(verbose_name="Nome do Estabelecimento", max_length=12, blank=False)
    main_image = models.TextField(verbose_name="Imagem Principal", blank=True)

    link_instagram = models.TextField(verbose_name="Link Instagram", blank=True)
    link_whatsapp = models.TextField(verbose_name="Link WhatsApp", blank=True)

    class Meta:
        verbose_name_plural = 'Gerencial'

    def __str__(self):
        return str(str(self.abertura) + ' às ' + str(self.fechamento))
