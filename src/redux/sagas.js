import { takeEvery, put, call } from 'redux-saga/effects';
import { getUsers } from '../indexeDB/database';
import { getUsername } from './userData/reducers';

export function* sagaWorker() {
  try {
    const data = yield call(() => getUsers((user) => user));
    yield put(getUsername(data));
  } catch (e) {
    yield put({ type: 'requestFailed()' });
  }
}

export function* sagaWatcher() {
  yield takeEvery('FORWARD_REQUEST', sagaWorker);
}
