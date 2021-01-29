/*eslint-disable*/
import { takeEvery, put, select, take } from 'redux-saga/effects';
import { userValue } from './user/selector';
import { setItem } from 'utils/localStorage';
import { addNewUser } from '../indexedDB/database';
import { SET_DB, setValueFailed, setValueSuccess } from './db/reducers';
import { ADD_INFO } from './user/reducers';

export function* sagaWorker() {
  try {
    const values = yield select(userValue);
    setItem(values);
  } catch (e) {
    yield put({ type: 'REQUEST/UPLOAD_FAIL' });
  }
}

export function* sagaLoaderDB() {
  try {
    const values = yield select(userValue);
    addNewUser(values);
    yield put(setValueSuccess());
  } catch (e) {
    yield put(setValueFailed());
  }
}

export function* sagaWatcher() {
  yield takeEvery(ADD_INFO, sagaWorker);
  yield takeEvery(SET_DB, sagaLoaderDB);
}
