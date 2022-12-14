import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import gamesSaga from './games.saga';
import mastersSaga from './masters.saga';
import connectionsSaga from './connections.saga';
import invitesSaga from './invites.saga';
import requestsSaga from './requests.saga';
import status from './status.saga';
import deleteSaga from './delete.saga';
import editUser from './editUser.saga';
import saveUser from './saveUser.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    gamesSaga(),
    mastersSaga(),
    connectionsSaga(),
    invitesSaga(),
    requestsSaga(),
    status(),
    deleteSaga(),
    editUser(),
    saveUser()
  ]);
}
