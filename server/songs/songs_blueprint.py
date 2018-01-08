from flask import Blueprint, request
from server.songs import songs_dao as dao
import json

songs_blueprint = Blueprint(
    'songs',
    __name__,
    url_prefix='/api/song'
)


@songs_blueprint.route('/', methods=['GET', 'POST'])
def collection():
    method = request.method
    if method == 'GET':
        return dao.get_songs()
    elif method == 'POST':
        return dao.add_song(request.form)
    return json.dumps(None)


@songs_blueprint.route('/<song_id>', methods=['PUT', 'DELETE', 'GET'])
def resource(song_id):
    method = request.method
    if method == 'DELETE':
        return dao.delete_song(song_id)
    else:
        pass
