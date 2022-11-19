import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* updateStatus(action) {
    console.log('in updateStatus');
    const connectionId = action.payload.id;
    const newStatus = action.payload.newStatus;

    yield axios.put(`/api/status/${connectionId}`, {newStatus});

    yield put({
        type: 'FETCH_REQUESTS',
    });
    yield put({
        type: 'FETCH_INVITES',
    });
}

function* updateStatusSaga() {
    yield takeLatest('UPDATE_STATUS', updateStatus);
}

export default updateStatusSaga;