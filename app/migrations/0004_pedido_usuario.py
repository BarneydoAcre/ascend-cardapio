# Generated by Django 3.2.8 on 2021-10-29 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20211028_2131'),
    ]

    operations = [
        migrations.AddField(
            model_name='pedido',
            name='usuario',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
