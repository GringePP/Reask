from ...base_app import db


class UserModel(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(20), nullable=False)


class SongModel(db.Model):
    __tablename__ = 'songs'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(20), nullable=False)
    artist = db.Column(db.String(50), nullable=False)
    poster = db.Column(db.String(20), nullable=False)
    # category = db.Column(db.String(20), nullable=False)
