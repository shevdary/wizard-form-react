import { takeEvery, put } from 'redux-saga/effects';
// db
import { SET_DB, setValueSuccess } from 'redux/db/reducers';
// utils
import {
  getUserFromLocalStorage,
  removeAllFromLocalStorage,
  setUserToLocalStorage,
} from 'utils/localStorage';
// actions
import {
  GET_USER,
  UPDATE_USER,
  getUserFailed,
  resetUserValue,
  update,
} from './actions';

export function* setUserToStorage(action) {
  try {
    setUserToLocalStorage(action.payload);
  } catch (e) {
    yield put(getUserFailed());
  }
}

export function* getUserFromStorage() {
  try {
    const valuesFromLocalStore = getUserFromLocalStorage();

    if (
      valuesFromLocalStore &&
      Object.keys(valuesFromLocalStore).includes('username' && 'password')
    ) {
      yield put(update(valuesFromLocalStore));
    }
  } catch (e) {
    yield put(getUserFailed());
  }
}

export function* removeUserFromLocalStorage() {
  try {
    removeAllFromLocalStorage();
    yield put(setValueSuccess());
    yield put(resetUserValue());
  } catch (e) {
    yield put(getUserFailed());
  }
}

export function* sagaWatcherUser() {
  yield takeEvery(UPDATE_USER, setUserToStorage);
  yield takeEvery(GET_USER, getUserFromStorage);
  yield takeEvery(SET_DB, removeUserFromLocalStorage);
}
