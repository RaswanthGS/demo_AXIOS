# Generated by Django 4.0.5 on 2022-07-11 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='uploads/images')),
                ('name', models.TextField(max_length=50)),
                ('price', models.DecimalField(decimal_places=2, max_digits=7)),
                ('description', models.TextField()),
                ('category', models.CharField(max_length=50)),
            ],
        ),
    ]
