
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Route for the home page of the pong app
]
