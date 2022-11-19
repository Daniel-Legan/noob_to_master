import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchInvites() {
    const response = yield axios.get(`/api/invites`);

    yield put({
        type: 'SET_INVITES',
        payload: response.data
    });
}

function* invitesSaga() {
    yield takeLatest('FETCH_INVITES', fetchInvites);
}

export default invitesSaga;