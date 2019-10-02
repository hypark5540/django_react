from demo.models import Dummy
from rest_framework import viewsets, permissions
from .serializers import DemoSerializer


class DemoViewSet(viewsets.ModelViewSet):
    queryset = Dummy.objects.all()

    permission_classes = [
        permissions.AllowAny
    ]

    serializer_class = DemoSerializer
