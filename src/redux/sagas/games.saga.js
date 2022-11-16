import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchGames() {

    const response = yield axios.get(`/api/games`);

    yield put({
        type: 'SET_GAMES',
        payload: response.data
    });
}

function* gamesSaga() {
    yield takeLatest('FETCH_GAMES', fetchGames);
}

export default gamesSaga;