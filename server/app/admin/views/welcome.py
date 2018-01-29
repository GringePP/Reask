from flask_admin import BaseView, expose


class Welcome(BaseView):
    @expose('/')
    def index(self):
        return self.render('admin/welcome.html')


view = Welcome('Welcome')
