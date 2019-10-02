from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


class Lead(models.Model):
    objects = models.Manager()
    numberOfDate = models.IntegerField(default=31,
                                       validators=[
                                           MaxValueValidator(31),
                                           MinValueValidator(1)
                                       ]
                                       )
    nru = models.IntegerField(default=0,
                              validators=[
                                  MinValueValidator(0)
                              ]
                              )
    pur = models.IntegerField(default=0,
                              validators=[
                                  MaxValueValidator(100),
                                  MinValueValidator(0)
                              ]
                              )
    arppu = models.IntegerField(default=0,
                                validators=[
                                    MinValueValidator(0)
                                ]
                                )
    goalMoney = models.IntegerField(default=0,
                                    validators=[
                                        MinValueValidator(0)
                                    ]
                                    )

# Create your models here.
