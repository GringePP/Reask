from flask_admin import BaseView, expose


class Song(BaseView):
    @expose('/')
    def index(self):
        return self.render('song.html')


view = Song('Song')
