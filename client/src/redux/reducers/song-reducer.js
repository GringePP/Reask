import { ADD_SONG, GET_SONG_LIST } from '../actions/index';

export default function reducer(state = {}, action) {
    console.log(action.type);
    switch (action.type) {
        case GET_SONG_LIST:
        case ADD_SONG:
            if (action.isFetching || action.status !== 200) {
                return state;
            }
            return action;
        default:
            return state;
    }
}