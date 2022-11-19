import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchInvites() {

    const response = yield axios.get(`/api/invites`);

    yield put({
        type: 'SET_INVITES',
        payload: response.data
    });
}

function* updateClearMaster(action) {
    yield axios.put(`/api/invites/${action.payload}`);
    yield put({
        type: 'FETCH_INVITES',
    });
}

function* invitesSaga() {
    yield takeLatest('FETCH_INVITES', fetchInvites);
    yield takeLatest('UPDATE_CLEAR_MASTER', updateClearMaster);
}

export default invitesSaga;