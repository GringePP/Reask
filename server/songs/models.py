import sqlite3


def drop_table():
    with sqlite3.connect('songs.db') as conn:
        cursor = conn.cursor()
        sql_drop_table = """DROP TABLE IF EXISTS songs"""
        cursor.execute(sql_drop_table)


def create_table():
    with sqlite3.connect('songs.db') as conn:
        cursor = conn.cursor()
        sql_create_table = """
        CREATE TABLE songs(
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        title TEXT NOT NULL,
        artist TEXT NOT NULL,
        poster TEXT NOT NULL
        )"""
        cursor.execute(sql_create_table)


if __name__ == '__main__':
    drop_table()
    create_table()
