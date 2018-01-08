import fetch from 'isomorphic-fetch';

export default function ({dispatch, getState}) {
    return next => action => {
        if (typeof action === 'function') {
            return action({dispatch, getState});
        }
        if (!action.api) {
            return next(action);
        }
        const {type, api} = action;
        next({type, api, isFetching: true});

        return fetch(api.url, {
            method: api.method,
            body: api.body,
        }).then(response => {
            if (response.status !== 200) {
                next({type, api, response: null, isFetching: false, status: response.status});
            } else {
                response.json()
                    .then(json => {
                        next({type, api, response: json.response, status: 200, isFetching: false});
                    });
            }
        });
    };
}