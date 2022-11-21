import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* fetchConnections() {
    console.log('in fetchConnections');
    const response = yield axios.get(`/api/fetchConnections`);

    yield put({
        type: 'SET_CONNECTIONS',
        payload: response.data
    });
}

function* connectionsSaga() {
    yield takeEvery('FETCH_CONNECTIONS', fetchConnections);
}

export default connectionsSaga;