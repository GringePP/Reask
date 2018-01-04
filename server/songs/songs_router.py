from flask import Blueprint

songs_blueprint = Blueprint(
    'songs',
    __name__,
    url_prefix='/api/songs'
)


@songs_blueprint.route('/', methods=['GET', 'POST'])
def collection():
    pass
