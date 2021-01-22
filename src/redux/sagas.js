import { takeEvery, put } from 'redux-saga/effects';

export function* sagaWorker() {
  try {
    yield put({ type: 'requestFailed()' });
  } catch (e) {
    yield put({ type: 'requestFailed()' });
  }
}

export function* sagaWatcher() {
  yield takeEvery('REQUEST_POSTS', sagaWorker);
}
