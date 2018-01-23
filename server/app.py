from flask import Flask
from .blueprints import blueprints
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

for blueprint in blueprints:
    app.register_blueprint(blueprint)
