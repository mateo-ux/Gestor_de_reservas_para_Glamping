# Generated by Django 5.1.1 on 2024-09-10 23:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pag_admin', '0006_glamping_imagen1_glamping_imagen2_glamping_imagen3_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='glamping',
            name='imagen1',
            field=models.ImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='glamping',
            name='imagen2',
            field=models.ImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='glamping',
            name='imagen3',
            field=models.ImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='glamping',
            name='imagen4',
            field=models.ImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='glamping',
            name='imagen5',
            field=models.ImageField(upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='glamping',
            name='imagen6',
            field=models.ImageField(upload_to='images/'),
        ),
    ]
