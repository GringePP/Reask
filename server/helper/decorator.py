import sqlite3
import json


def db_helper(db_name, mapping_rule):
    def wrapper(func):
        def inner(*args, **kw):
            with sqlite3.connect(db_name) as conn:
                try:
                    raw_data = func(conn=conn, *args, **kw)
                except Exception as e:
                    return __common_struct(success=False, msg=str(e))
                if raw_data is None:
                    mapped_data = None
                else:
                    mapped_data = mapping_rule(raw_data)
            return __common_struct(mapped_data)

        return inner

    return wrapper


def sqlalchemy_helper(mapper):
    def wrapper(func):
        def inner(*args, **kwargs):
            try:
                raw = func(*args, **kwargs)
                mapped = mapper(raw)
                response = __common_struct(mapped)
            except Exception as e:
                response = __common_struct(None, False, 'error: ' + str(e))
                pass
            return response

        return inner

    return wrapper


def __common_struct(result=None, success=True, msg='error'):
    if success:
        output = {'response': result, 'status': 1, 'message': 'success'}
    else:
        output = {'response': result, 'status': 0, 'message': msg}
    return json.dumps(output)
