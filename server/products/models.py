from django.db import models

# Create your models here.
class Product(models.Model):
    image = models.ImageField(upload_to = 'uploads/images')
    name = models.TextField(max_length=50)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    description = models.TextField()
    category = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.name