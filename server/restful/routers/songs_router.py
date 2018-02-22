import json

from flask import Blueprint, request

from ..dao.songs import song_dao as dao

songs_router = Blueprint(
    'restful_songs',
    __name__,
    url_prefix='/api/song'
)


@songs_router.route('/', methods=['GET', 'POST'])
def collection():
    method = request.method
    if method == 'GET':
        return dao.get_songs()
    elif method == 'POST':
        raw_data = request.data
        data = json.loads(str(raw_data, 'utf-8'))
        return dao.add_song(data)
    return json.dumps(None)


@songs_router.route('/<song_id>', methods=['PUT', 'DELETE', 'GET'])
def resource(song_id):
    method = request.method
    if method == 'DELETE':
        return dao.delete_song(song_id)
    else:
        pass
