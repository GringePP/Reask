from flask import Blueprint, request
from server.songs import songs_dao as dao

songs_blueprint = Blueprint(
    'songs',
    __name__,
    url_prefix='/api/songs'
)


@songs_blueprint.route('/', methods=['GET', 'POST'])
def collection():
    method = request.method
    if method == 'GET':
        return dao.get_songs()
    elif method == 'POST':
        body = request.form
        return dao.add_song(body)
