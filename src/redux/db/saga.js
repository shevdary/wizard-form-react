import { put, select, takeEvery } from 'redux-saga/effects';
// user
import { userSelector } from 'redux/user/selector';
// db
import { setNewUserToDB } from 'indexedDB/database';
import { SET_DB, setValueFailed } from './reducers';

export function* setValuesToDB() {
  try {
    const values = yield select(userSelector);

    setNewUserToDB(values);
  } catch (e) {
    yield put(setValueFailed());
  }
}
export function* sagaWatcherDB() {
  yield takeEvery(SET_DB, setValuesToDB);
}
