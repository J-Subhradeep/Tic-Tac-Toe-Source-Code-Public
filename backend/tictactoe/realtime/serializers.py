from rest_framework import serializers
from .models import SecondClient
class SecondClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = SecondClient
        fields = "__all__"
        