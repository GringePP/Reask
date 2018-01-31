from server.app.base_app import db, SongModel
from server.helper.decorator import sqlalchemy_helper


def mapper(data):
    if isinstance(data, list):
        return [mapper(item) for item in data]
    else:
        return {'id': data.id, 'title': data.title, 'artist': data.artist, 'poster': data.poster}


@sqlalchemy_helper(mapper)
def get_songs():
    return SongModel.query.all()


@sqlalchemy_helper(mapper)
def add_song(song):
    new_song = SongModel(title=song['title'], artist=song['artist'], poster=song['poster'])
    db.session.add(new_song)
    db.session.commit()
    return SongModel.query.all()


@sqlalchemy_helper(mapper)
def delete_song(song_id):
    selected_song = SongModel.query.filter_by(id=song_id).first()
    db.session.delete(selected_song)
    db.session.commit()
    return SongModel.query.all()
