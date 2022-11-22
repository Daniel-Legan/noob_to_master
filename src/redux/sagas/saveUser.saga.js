import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* saveUserData(action) {
    // edit
    const response = yield axios.put(`/api/user/${action.payload.id}`, action.payload);

    console.log(response.data); // OK

    yield put({ type: 'FETCH_USER' });

    // add new
    // else {
    //     yield axios.post(`/api/user`, action.payload)
    // }
}

function* saveUser() {
    yield takeLatest('SAVE_USER_DATA', saveUserData);
}

export default saveUser;