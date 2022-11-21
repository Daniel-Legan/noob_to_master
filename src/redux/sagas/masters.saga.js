import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMasters() {
    const response = yield axios.get(`/api/masters/`);

    yield put({
        type: 'SET_MASTERS',
        payload: response.data
    });
}

function* mastersSaga() {
    yield takeLatest('FETCH_MASTERS', fetchMasters);
}

export default mastersSaga;