from flask_script import Manager, Server
from server.app import app
from server.tornado_app import tornado_app_run

manager = Manager(app)

manager.add_command('dev', Server(host='127.0.0.1', port=5000, use_debugger=True))
manager.add_command('tornado', tornado_app_run())

if __name__ == '__main__':
    manager.run()
