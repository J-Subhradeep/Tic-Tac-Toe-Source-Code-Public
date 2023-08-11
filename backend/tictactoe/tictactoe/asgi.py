"""
ASGI config for tictactoe project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.0/howto/deployment/asgi/
"""

import os


from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import realtime.routing
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'tictactoe.settings')


application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket":
        URLRouter(
            realtime.routing.websocket_urlpatterns
    ),
})
