import os
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import pong.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ft_transcendance_backend.settings')

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': AuthMiddlewareStack(
        URLRouter(
            pong.routing.websocket_urlpatterns
        )
    ),
})