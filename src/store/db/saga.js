import { put, select, takeEvery, call } from 'redux-saga/effects';
// user
import * as User from 'store/user/selector';
// db
import * as DB from 'store/db/actions';
import {
  deleteUserFromDB,
  clearOldVersionDB,
  setNewUserToDB,
  updateUserInDB,
  clearValuesFromDB,
} from 'indexedDB/database';
import { GENERATE_USERS } from '../users';

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

export function* ensureRemoveOldVersion() {
  try {
    yield call(clearOldVersionDB);
  } catch (e) {
    console.log(e);
    yield put(DB.setValueFailed());
  }
}

export function* ensureClearDB() {
  try {
    yield call(clearValuesFromDB);
  } catch (e) {
    console.log(e);
  }
}

export function* sagaWatcherDB() {
  yield takeEvery(DB.ADD_TO_DB, ensureAddValuesToDB);
  yield takeEvery(DB.UPDATE_USER_DB, ensureUpdateValuesToDB);
  yield takeEvery(DB.DELETE_FROM_DB, ensureDeleteUserFromDB);
  yield takeEvery(DB.REMOVE_OLD_VERSION, ensureRemoveOldVersion);
  yield takeEvery(GENERATE_USERS, ensureClearDB);
}
