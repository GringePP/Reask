import songReducer from './song-reducer';
import { combineReducers } from 'redux';
import dialogReducer from './dialog-reducer';

export default combineReducers({
    songReducer, dialogReducer
})