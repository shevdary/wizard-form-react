import { put, select, takeEvery } from 'redux-saga/effects';
// user
import * as User from 'redux/user/selector';
// db
import * as DB from 'redux/db/actions';
import { setNewUserToDB } from 'indexedDB/database';

export function* setValuesToDB() {
  try {
    const values = yield select(User.userSelector);

    setNewUserToDB(values);
  } catch (e) {
    yield put(DB.setValueFailed());
  }
}
export function* sagaWatcherDB() {
  yield takeEvery(DB.SET_DB, setValuesToDB);
}
