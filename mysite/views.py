from django.http import HttpRequest
from django.shortcuts import render
from django.conf import settings
import json
import functools


def get_chunk_names():
    stat_filename = settings.WEBPACK_LOADER['DEFAULT']['STATS_FILE']
    with open(stat_filename, 'r') as f:
        d = json.load(f)
        names = d.get('chunks', {}).keys()
        return names


if not settings.DEBUG:
    get_chunk_names = functools.lru_cache(maxsize=1)(get_chunk_names)


def fake_react_view(request: HttpRequest):
    return render(request, 'fake_react_view.html', {
        'debug': settings.DEBUG, 'chunk_names': get_chunk_names()
    })
