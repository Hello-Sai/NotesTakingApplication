from django.urls import path,include
from rest_framework.routers import DefaultRouter
from notes.views import *
router = DefaultRouter()
router.register('notes',NoteViewSet)

urlpatterns = [
    path('',include(router.urls))
]