import { createStore, applyMiddleware, compose } from 'redux';
import reducers from '../reducers';
import songApi from '../middlewares/song-api';

const withMiddlewares = compose(
    applyMiddleware(songApi),
)(createStore);

export default function configStore() {
    return withMiddlewares(reducers);
}