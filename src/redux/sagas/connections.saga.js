import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addConnection(action) {
    try {
        yield axios.post('/api/connections', action.payload)

    } catch (error) {
        console.log('error in connections saga', error);
    }
}

function* connectionsSaga() {
    yield takeEvery('ADD_CONNECTION', addConnection);
}

export default connectionsSaga;