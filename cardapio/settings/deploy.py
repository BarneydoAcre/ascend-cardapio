from django.core.management.utils import get_random_secret_key
from . import base
import os

SECRET_KEY = get_random_secret_key()

METHOD = 'P'

if METHOD == 'P':
    DEBUG = False

    SECURE_HSTS_SECONDS = True

    SECURE_HSTS_PRELOAD = True

    SECURE_HSTS_INCLUDE_SUBDOMAINS = True

    SECURE_SSL_REDIRECT = True

    SESSION_COOKIE_SECURE = True

    CSRF_COOKIE_SECURE = True

elif METHOD == 'D':
    DEBUG = True

    SECURE_HSTS_SECONDS = False

    SECURE_HSTS_PRELOAD = False

    SECURE_HSTS_INCLUDE_SUBDOMAINS = False

    SECURE_SSL_REDIRECT = False

    SESSION_COOKIE_SECURE = False
    
    CSRF_COOKIE_SECURE = False

else:
    exit()
