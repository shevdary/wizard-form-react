import { takeEvery, put, call } from 'redux-saga/effects';
import { getUserByID } from 'indexedDB/database';
// loader
import { startLoad, stopLoad } from 'redux/loader';
// db
import { ADD_TO_DB } from 'redux/db/actions';
// user
import * as User from 'redux/user/index';
// utils
import {
  getUserFromLocalStorage,
  removeAllFromLocalStorage,
  setUserToLocalStorage,
} from 'utils/localStorage';

export function* ensureSetToLocalStorage(action) {
  try {
    if (!action.payload.id) setUserToLocalStorage(action.payload);
  } catch (e) {
    yield put(User.getUserFailed());
  }
}

export function* ensureGetFromLocalStorage() {
  try {
    const userValues = getUserFromLocalStorage();
    if (
      userValues &&
      Object.keys(userValues).includes('username' && 'password')
    )
      yield put(User.updateUser(userValues));
  } catch (e) {
    yield put(User.getUserFailed());
  }
}

export function* ensureRemoveLocalStorage() {
  try {
    removeAllFromLocalStorage();
    yield put(User.removeUserValue());
  } catch (e) {
    yield put(User.getUserFailed());
  }
}

export function* ensureGetUserById(action) {
  yield put(startLoad());
  try {
    const values = yield call(() => getUserByID(action.payload));
    if (values) yield put(User.updateUser(values));
  } catch (e) {
    yield put(User.getUserFailed());
  } finally {
    yield put(stopLoad());
  }
}

export function* sagaWatcherUser() {
  yield takeEvery(User.UPDATE_USER, ensureSetToLocalStorage);
  yield takeEvery(User.GET_USER, ensureGetFromLocalStorage);
  yield takeEvery(ADD_TO_DB, ensureRemoveLocalStorage);
  yield takeEvery(User.GET_USER_BY_ID, ensureGetUserById);
}
