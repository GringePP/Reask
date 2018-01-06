from server.decorator import db_helper


def mapping_rule(item):
    return {'id': item[0], 'title': item[1], 'artist': item[2], 'poster': item[3]}


@db_helper('server/songs/songs.db', lambda x: [mapping_rule(y) for y in x])
def get_songs(conn=None):
    cursor = conn.cursor()
    sql_get_songs = """SELECT * FROM songs ORDER BY id desc"""
    cursor.execute(sql_get_songs)
    return cursor.fetchall()


@db_helper('server/songs/songs.db', None)
def add_song(data, conn=None):
    cursor = conn.cursor()
    sql_add_song = """INSERT INTO songs (title, artist, poster) VALUES (?, ?, ?)"""
    cursor.execute(sql_add_song, (data['title'], data['artist'], data['poster']))
