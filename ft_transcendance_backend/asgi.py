import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from channels.security.websocket import AllowedHostsOriginValidator
import ft_transcendance_backend.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ft_transcendance_backend.settings')

django_asgi_app = get_asgi_application()

application = ProtocolTypeRouter({
    "http": django_asgi_app,
    "websocket": AllowedHostsOriginValidator(
        AuthMiddlewareStack(
            URLRouter(
                ft_transcendance_backend.routing.websocket_urlpatterns
            )
        )
    ),
})
