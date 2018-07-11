import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import TaskEntrySaga from './TaskEntrySagas';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    TaskEntrySaga(),
    // watchIncrementAsync()
  ]);
}
