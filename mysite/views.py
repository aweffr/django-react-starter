from django.http import HttpRequest
from django.shortcuts import render
from django.conf import settings


def fake_react_view(request: HttpRequest):
    return render(request, 'fake_react_view.html', {'debug': settings.DEBUG})
