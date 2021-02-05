import { takeEvery, put } from 'redux-saga/effects';
// db
import * as DB from 'redux/db/actions';
// user
import * as User from 'redux/user/index';
// utils
import {
  getUserFromLocalStorage,
  removeAllFromLocalStorage,
  setUserToLocalStorage,
} from 'utils/localStorage';

export function* setUserToStorage(action) {
  try {
    setUserToLocalStorage(action.payload);
  } catch (e) {
    yield put(User.getUserFailed());
  }
}

export function* getUserFromStorage() {
  try {
    const valuesFromLocalStore = getUserFromLocalStorage();
    if (
      valuesFromLocalStore &&
      Object.keys(valuesFromLocalStore).includes('username' && 'password')
    )
      yield put(User.update(valuesFromLocalStore));
  } catch (e) {
    yield put(User.getUserFailed());
  }
}

export function* removeUserFromLocalStorage() {
  try {
    removeAllFromLocalStorage();
    yield put(DB.setValueSuccess());
    yield put(User.resetUserValue());
  } catch (e) {
    yield put(User.getUserFailed());
  }
}

export function* sagaWatcherUser() {
  yield takeEvery(User.UPDATE_USER, setUserToStorage);
  yield takeEvery(User.GET_USER, getUserFromStorage);
  yield takeEvery(DB.SET_DB, removeUserFromLocalStorage);
}
