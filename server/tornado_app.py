from .app import app
from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop


def tornado_app_run():
    http_server = HTTPServer(WSGIContainer(app))
    http_server.listen(5000, '127.0.0.1')
    IOLoop.instance().start()
