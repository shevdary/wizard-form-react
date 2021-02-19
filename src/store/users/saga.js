import { call, takeEvery, put } from 'redux-saga/effects';
// db
import { addArrayOfUsersToDB, getUserListFromDB } from 'indexedDB/database';
// store
import { startLoad, stopLoad } from 'store/loader';
import { DELETE_FROM_DB } from 'store/db/actions';
import {
  deleteUserFromList,
  GENERATE_USERS,
  GET_USERS,
  setUserList,
} from 'store/users/actions';

import { arrayOfUsers } from 'utils/generate';
import { ensureClearAllUsers } from '../db/saga';

export function* ensureAddUserToList() {
  yield put(startLoad());
  try {
    const values = yield call(getUserListFromDB);
    yield put(setUserList(values));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(stopLoad());
  }
}

export function* ensureDeleteUserFromList(action) {
  try {
    yield put(deleteUserFromList(action.payload));
  } catch (e) {
    console.log(e);
  }
}
export function* ensureAddUsersToDB(action) {
  yield put(startLoad());

  try {
    yield ensureClearAllUsers();
    yield addArrayOfUsersToDB(arrayOfUsers(action.payload));
    const data = yield call(getUserListFromDB);
    yield put(setUserList(data));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(stopLoad());
  }
}

export function* sagaWatcherUserList() {
  yield takeEvery(GET_USERS, ensureAddUserToList);
  yield takeEvery(DELETE_FROM_DB, ensureDeleteUserFromList);
  yield takeEvery(GENERATE_USERS, ensureAddUsersToDB);
}
