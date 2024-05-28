
from django.shortcuts import render

def home(request):
    return render(request, 'pong/home.html')  # Render the home.html template for the pong app
