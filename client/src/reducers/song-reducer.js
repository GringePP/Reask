import { GET_SONG_LIST } from '../actions';

export default function reducer(state = {}, action) {
    console.log(action.type);
    switch (action.type) {
        case GET_SONG_LIST:
            return action;
        default:
            return state;
    }
}