import { API_ROOT } from "../constant";

export const GET_SONG_LIST = 'GET_SONG_LIST';
export const GET_SONG = 'GET_SONG';
export const ADD_SONG = 'ADD_SONG';
export const DELETE_SONG = 'DELETE_SONG';

const commonRequest = (type, api) => ({dispatch, getState}) => dispatch({type, api});

export function getSongs() {
    return commonRequest(
        GET_SONG_LIST,
        {
            url: `${API_ROOT}/`,
            method: 'GET'
        }
    );
}

export function getSong(songId) {
    return commonRequest(
        GET_SONG,
        {
            url: `${API_ROOT}/${songId}`,
            method: 'GET'
        }
    );
}

export function addSong(song) {
    return commonRequest(
        ADD_SONG,
        {
            url: `${API_ROOT}/`,
            method: 'POST',
            body: JSON.stringify(song)
        }
    )
}

export function deleteSong(songId) {
    return commonRequest(
        DELETE_SONG,
        {
            url: `${API_ROOT}/${songId}`,
            method: 'DELETE'
        }
    );
}

export function addTestSong() {
    return commonRequest(
        ADD_SONG,
        {
            url: `${API_ROOT}/`,
            method: 'POST',
            body: JSON.stringify({
                title:'Test Song',
                artist:'Mindjet',
                poster: 'https://avatars3.githubusercontent.com/u/17674741?s=460&v=4'
            })
        }
    );
}