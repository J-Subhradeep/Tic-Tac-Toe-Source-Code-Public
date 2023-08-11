from django.db import models

# Create your models here.


class SecondClient(models.Model):
    group_name = models.CharField(max_length=20)
    first_client = models.CharField(max_length=30, null=True)
    second_client = models.CharField(max_length=30, null=True)

    def __str__(self):
        return f"grp_{self.group_name}, first_c_{self.first_client}, second_c_{self.second_client}"
class ChannelNames(models.Model):
    group = models.ForeignKey(SecondClient,on_delete=models.CASCADE)
    first_client = models.CharField(max_length=200)
    second_client = models.CharField(max_length=200)