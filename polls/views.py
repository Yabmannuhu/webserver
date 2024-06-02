from django.shortcuts import render
from .models import MySQLData
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import FormDataSerializer

from rest_framework import generics
from .models import FormData
from .tests import FormDataSerializer

class FormDataListCreate(generics.ListCreateAPIView):
    queryset = FormData.objects.all()
    serializer_class = FormDataSerializer

@api_view(['POST'])
def submit_form(request):
    if request.method == 'POST':
        serializer = FormDataSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

