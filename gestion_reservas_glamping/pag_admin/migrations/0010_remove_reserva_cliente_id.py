# Generated by Django 5.1.1 on 2024-09-17 23:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pag_admin', '0009_alter_glamping_imagen1_alter_glamping_imagen2_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='reserva',
            name='cliente_id',
        ),
    ]
