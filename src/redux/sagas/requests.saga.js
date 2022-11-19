import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRequests() {
    const response = yield axios.get(`/api/requests`);

    yield put({
        type: 'SET_REQUESTS',
        payload: response.data
    });
}

function* requestsSaga() {
    yield takeLatest('FETCH_REQUESTS', fetchRequests);
}

export default requestsSaga;