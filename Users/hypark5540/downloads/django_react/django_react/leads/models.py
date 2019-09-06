from django.db import models

class Lead(models.Model):
    name = models.CharField(max_length = 100)
    email = models.EmailField(max_length = 100, unique = True)
    title = models.CharField(max_length = 50, blank = True)
    message = models.CharField(max_length = 500, blank = True)
    created_at = models.DateTimeField(auto_now_add=True)
# Create your models here.
