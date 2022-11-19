import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* deleteConnection(action) {
    try {
        yield axios.delete(`/api/delete/${action.payload}`)
    } catch (error) {
        console.log('error in delete SAGA', error);
    }
    yield put({
        type: 'FETCH_REQUESTS'
    });
    yield put({
        type: 'FETCH_INVITES'
    });
}

function* deleteSaga() {
    yield takeEvery('DELETE_CONNECTION', deleteConnection);
}

export default deleteSaga;