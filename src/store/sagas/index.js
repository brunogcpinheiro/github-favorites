import { all, takeLatest } from 'redux-saga/effects';
import { addFavorite } from './favorites';
import { ADD_FAVORITE_REQUEST } from '../actions/favorites';

export default function* rootSaga () {
    yield all([
        takeLatest(ADD_FAVORITE_REQUEST, addFavorite),
    ]);
}