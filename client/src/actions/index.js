import { API_ROOT } from "../constant";

export const GET_SONG_LIST = 'GET_SONG_LIST';
export const GET_SONG = 'GET_SONG';
export const ADD_SONG = 'ADD_SONG';
export const DELETE_SONG = 'DELETE_SONG';

export function getSongs() {
    return ({dispatch, getState}) => {
        const action = {
            type: GET_SONG_LIST,
            api: {
                url: `${API_ROOT}/`,
                method: 'GET',
            }
        };
        return dispatch(action);
    }
}

export function getSong(songId) {
    return {
        type: GET_SONG,
        api: {
            url: `${API_ROOT}/${songId}`,
            method: 'GET'
        }
    }
}

export function deleteSong(songId) {
    return {
        type: DELETE_SONG,
        api: {
            url: `${API_ROOT}/${songId}`,
            method: 'DELETE'
        }
    }
}