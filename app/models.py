from django.db import models

class Produto(models.Model):
    name = models.CharField(verbose_name="Nome", max_length = 30)
    desc = models.CharField(verbose_name="Descrição", max_length = 160)
    ingredients = models.CharField(verbose_name="Ingredientes", max_length = 100, blank=True)
    value = models.FloatField(verbose_name="Valor")
    disponibilidade = models.BooleanField(verbose_name="Disponível", default=True)

    # image = models.FileField(upload_to='app/static/public/cardapio/', blank=True)
    image = models.TextField(verbose_name="Imagem", max_length=255, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Pedido(models.Model):
    produto = models.ForeignKey('Produto', verbose_name="Produto", on_delete=models.PROTECT)
    cpf = models.CharField(max_length = 14)

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

class Gerencial(models.Model):
    choices = [
        (1, 'Food Service'),
        (2, 'Varejo Service'),
        ]
    abertura = models.IntegerField(verbose_name='Abertura', default=18)
    fechamento = models.IntegerField(verbose_name='Fechamento', default=22)
    service = models.IntegerField(verbose_name="Tipo de serviço", choices=choices, blank=False)

    logo = models.TextField(verbose_name="Icone Logo", blank=True)
    nome_estabelecimento = models.CharField(verbose_name="Nome do Estabelecimento", max_length=16, blank=False)
    main_image = models.TextField(verbose_name="Imagem Principal", blank=True)

    link_instagram = models.CharField(verbose_name="Link Instagram", max_length=255, blank=True)
    num_whatsapp = models.CharField(verbose_name="Nº WhatsApp", max_length=13, blank=True)

    class Meta:
        verbose_name_plural = 'Gerencial'

    def __str__(self):
        return str(str(self.abertura) + ' às ' + str(self.fechamento))
