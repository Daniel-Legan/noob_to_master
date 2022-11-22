import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* saveUserData(action) {
    const response = yield axios.put(`/api/user`, action.payload);

    console.log(response.data); // OK

    yield put({ type: 'FETCH_USER' });
}

function* saveUser() {
    yield takeLatest('SAVE_USER_DATA', saveUserData);
}

export default saveUser;