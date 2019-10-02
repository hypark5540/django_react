from rest_framework import serializers
from demo.models import Dummy


class DemoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dummy
        fields = '__all__'
