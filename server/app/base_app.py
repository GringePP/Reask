from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_admin import Admin
import os

app = Flask(__name__)
CORS(app)

# database with flask-sqlalchemy
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///../database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SECRET_KEY'] = os.urandom(20)
db = SQLAlchemy(app)

# management system with flask-admin
admin = Admin(app, template_mode='bootstrap3')
from .admin.models import UserModel, SongModel
from .admin.views import all_views

for view in all_views:
    admin.add_view(view)

# restful api
from server.blueprints import blueprints

for blueprint in blueprints:
    app.register_blueprint(blueprint)
