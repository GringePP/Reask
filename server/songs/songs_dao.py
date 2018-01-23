from ..decorator import db_helper


def mapping_rule(item):
    return {'id': item[0], 'title': item[1], 'artist': item[2], 'poster': item[3]}


@db_helper('server/songs/songs.db', lambda x: [mapping_rule(y) for y in x])
def get_songs(conn=None):
    cursor = conn.cursor()
    return raw_get_songs(cursor)


@db_helper('server/songs/songs.db', lambda x: [mapping_rule(y) for y in x])
def add_song(data, conn=None):
    cursor = conn.cursor()
    sql_add_song = """INSERT INTO songs (title, artist, poster) VALUES (?, ?, ?)"""
    cursor.execute(sql_add_song, (data['title'], data['artist'], data['poster']))
    return raw_get_songs(cursor)


@db_helper('server/songs/songs.db', lambda x: [mapping_rule(y) for y in x])
def delete_song(song_id, conn=None):
    cursor = conn.cursor()
    sql_delete_song = """DELETE FROM songs WHERE id = ?"""
    cursor.execute(sql_delete_song, (song_id,))
    return raw_get_songs(cursor)


def raw_get_songs(cursor):
    sql_get_songs = """SELECT * FROM songs ORDER BY id desc"""
    cursor.execute(sql_get_songs)
    return cursor.fetchall()
