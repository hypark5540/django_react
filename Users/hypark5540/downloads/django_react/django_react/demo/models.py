from django.db import models


class Dummy(models.Model):
    objects = models.Manager()
    logdate = models.CharField(max_length=5)
    col_a = models.DecimalField(max_digits=20, decimal_places=2)
    col_b = models.DecimalField(max_digits=20, decimal_places=2)
    pu = models.IntegerField(default=0)
    arppu = models.IntegerField(default=0)
    ret = models.DecimalField(max_digits=20, decimal_places=2)
    output = models.DecimalField(max_digits=20, decimal_places=2)
    total = models.IntegerField(default=0)
    issuccess = models.IntegerField(default=0)
    servicecountry = models.CharField(max_length=50)

# Create your models here.
