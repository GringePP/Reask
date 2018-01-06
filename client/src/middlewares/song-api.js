import fetch from 'isomorphic-fetch';

export default function ({dispatch, getState}) {
    return next => action => {
        if (typeof action === 'function') {
            return action({dispatch, getState});
        }
        if (!action.api) {
            return next(action);
        }
        const {type, api, method, ...rest} = action;
        next({type, api, method, ...rest, isFetching: true});

        return fetch(api.url)
            .then(response => {
                if (response.status !== 200) {
                    next({type, api, method, response: null, isFetching: false, status: response.status, ...rest});
                } else {
                    response.json()
                        .then(json => {
                            next({type, api, method, response: json.response, status: 200, isFetching: false, ...rest});
                        });
                }
            });
    };
}