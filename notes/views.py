from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from notes.models import *
from notes.serializers import *

# Create your views here.
class NoteViewSet(ModelViewSet):
    queryset = Note.objects.all().order_by('-created_at')
    serializer_class = NoteSerializer