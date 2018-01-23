from flask_admin import Admin
from .. import flask_app
from .views import all_views

admin = Admin(flask_app)

for view in all_views:
    admin.add_view(view)
