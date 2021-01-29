/*eslint-disable*/
import { takeEvery, put, select, takeLatest } from 'redux-saga/effects';
import { userValue } from './user/selector';
import { setItem } from '../utils/localStorage';

export function* sagaWorker() {
  try {
    const values = yield select(userValue);
    setItem(values);
  } catch (e) {
    yield put({ type: 'REQUEST/UPLOAD_FAIL' });
  }
}

export function* sagaWatcher() {
  yield takeEvery('USER/ADD_INFO', sagaWorker);
}
