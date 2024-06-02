from django.test import TestCase
from rest_framework import serializers
from .models import FormData

class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Verify
        fields = [ 'phone', 'email', ]

# Create your tests here.
