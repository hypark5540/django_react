from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


# class CustomManager(models.Manager):
#     def __init__(self, qs_class=models.query.QuerySet):
#         super(CustomManager, self).__init__()
#         self.queryset_class = qs_class

#     def get_queryset(self):
#         return self.queryset_class(self.model)

#     def __getattr__(self, attr, *args):
#         try:
#             return getattr(self.__class__, attr, *args)
#         except AttributeError:
#             return getattr(self.get_queryset(), attr, *args)


# class MyModelQuerySet(models.query.QuerySet):

#     def filter(self, *args, **kwargs):
#         qs = super(MyModelQuerySet, self).filter(*args, **kwargs)
#         sum = 0
#         for row in qs:
#             sum += row.pu  # use a callback to prevent from caching
#         setattr(qs, 'sum', sum)
#         return qs


class Lead(models.Model):

    # objects = CustomManager()

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

    created_at = models.DateTimeField(auto_now_add=True)

    # def __pu(self):
    #     return self.nru * (self.pur * 0.01)

    # pu = property(__pu)

    # def __unicode__(self):
    #     return self.pu
# Create your models here.
