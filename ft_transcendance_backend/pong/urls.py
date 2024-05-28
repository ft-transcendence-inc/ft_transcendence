from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.index, name='about'),  # Redirect all paths to index for SPA handling
    path('home/', views.index, name='home'),    # Redirect all paths to index for SPA handling
]