from django.db import models

# Create your models here.
class Task(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    description = models.CharField(max_length=200,blank=False, default='')
    priority = models.CharField(max_length=20, default='low')
    complete = models.BooleanField(default=False)