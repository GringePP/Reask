from flask_script import Manager
from server.app import flask_app
from server.tornado_app import tornado_app_run

manager = Manager(flask_app)


@manager.command
def dev_server():
    flask_app.run('127.0.0.1', 5000, debug=True)


@manager.command
def tornado_server():
    tornado_app_run()


if __name__ == '__main__':
    manager.run()
