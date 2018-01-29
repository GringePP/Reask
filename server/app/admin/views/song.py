from flask_admin.contrib.sqla import ModelView
from ...base_app import db, SongModel


class Song(ModelView):
    def is_accessible(self):
        return True


view = Song(SongModel, db.session, name='Songs', endpoint='songs')
