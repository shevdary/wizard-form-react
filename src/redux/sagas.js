import { takeEvery, put, call } from 'redux-saga/effects';
import { getUsers } from '../indexedDB/database';
import { getUserList } from './userData/reducers';

export function* sagaWorker() {
  try {
    const data = yield call(() => getUsers((user) => user));
    yield put(getUserList(data));
  } catch (e) {
    yield put({ type: 'REQUEST/UPLOAD_FAIL' });
  }
}

export function* sagaWatcher() {
  yield takeEvery('FORWARD_REQUEST', sagaWorker);
}
