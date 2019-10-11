from django.db import models


class Dummy(models.Model):
    objects = models.Manager()
    logdate = models.TextField()
    col_a = models.CharField(max_length=10)
    col_b = models.CharField(max_length=10)
    ret = models.FloatField()
    output = models.FloatField()
    total = models.IntegerField()
    issuccess = models.BigIntegerField()
    servicecountry = models.TextField()

# Create your models here.
