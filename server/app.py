from flask import Flask
from server.blueprints import blueprints

app = Flask(__name__)

for blueprint in blueprints:
    app.register_blueprint(blueprint)
