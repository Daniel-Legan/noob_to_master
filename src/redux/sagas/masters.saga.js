import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMasters(action) {
    const noobId = action.payload;
    console.log(noobId);
    const response = yield axios.get(`/api/masters/${noobId}`);

    yield put({
        type: 'SET_MASTERS',
        payload: response.data
    });
}

function* mastersSaga() {
    yield takeLatest('FETCH_MASTERS', fetchMasters);
}

export default mastersSaga;