import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRequests() {
    const response = yield axios.get(`/api/requests`);

    yield put({
        type: 'SET_REQUESTS',
        payload: response.data
    });
}

function* updateCancelNoob(action) {
    yield axios.put(`/api/requests/${action.payload}`);
    yield put({
        type: 'FETCH_REQUESTS',
    });
}

function* requestsSaga() {
    yield takeLatest('FETCH_REQUESTS', fetchRequests);
    yield takeLatest('UPDATE_CANCEL_NOOB', updateCancelNoob);
}

export default requestsSaga;