# Generated by Django 5.1.1 on 2024-09-23 23:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pag_admin', '0015_pago'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaccionpayu',
            name='cliente',
        ),
        migrations.RemoveField(
            model_name='transaccionpayu',
            name='glamping',
        ),
        migrations.DeleteModel(
            name='Pago',
        ),
        migrations.DeleteModel(
            name='TransaccionPayU',
        ),
    ]
