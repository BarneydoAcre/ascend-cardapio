# Generated by Django 4.0 on 2022-02-24 02:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0011_alter_prato_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='prato',
            old_name='descricao',
            new_name='desc',
        ),
        migrations.RenameField(
            model_name='prato',
            old_name='nome',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='prato',
            old_name='valor',
            new_name='value',
        ),
    ]
