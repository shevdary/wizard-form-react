import { put, select, takeEvery } from 'redux-saga/effects';
// user
import * as User from 'redux/user/selector';
// db
import * as DB from 'redux/db/actions';
import {
  deleteUserFromDB,
  setNewUserToDB,
  updateUserInDB,
} from 'indexedDB/database';

export function* ensureAddValuesToDB() {
  try {
    const values = yield select(User.userSelector);
    const userDateToCreate = { updatedAt: new Date(), createdAt: new Date() };

    values.id
      ? yield put(DB.updateUserToDB(values))
      : setNewUserToDB(Object.assign(values, userDateToCreate));
  } catch (e) {
    yield put(DB.setValueFailed());
  }
}
export function* ensureUpdateValuesToDB(action) {
  try {
    const { payload } = action;
    updateUserInDB(payload.id, { ...payload, updatedAt: new Date() });
  } catch (e) {
    yield put(DB.setValueFailed());
  }
}

export function* ensureDeleteUserFromDB(action) {
  try {
    yield put(deleteUserFromDB(action.payload));
  } catch (e) {
    yield put(DB.setValueFailed());
  }
}

export function* sagaWatcherDB() {
  yield takeEvery(DB.ADD_TO_DB, ensureAddValuesToDB);
  yield takeEvery(DB.UPDATE_USER_DB, ensureUpdateValuesToDB);
  yield takeEvery(DB.DELETE_FROM_DB, ensureDeleteUserFromDB);
}
