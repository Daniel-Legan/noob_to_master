import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchEditUser() {
    try {
        const response = yield axios.get('/api/user');

        yield put({
            type: 'SET_EDIT_USER',
            payload: response.data
        });
    }
    catch (err) {
        console.error(err);
    }
}

function* editUser() {
    yield takeLatest('FETCH_EDIT_USER', fetchEditUser);
}

export default editUser;