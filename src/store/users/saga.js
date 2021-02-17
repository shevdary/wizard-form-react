/*eslint-disable*/
import { call, takeEvery, put } from 'redux-saga/effects';
// db
import { getUserListFromDB, setNewUserToDB } from 'indexedDB/database';
// store
import { startLoad, stopLoad } from 'store/loader';
import { DELETE_FROM_DB } from 'store/db/actions';
import {
  ADD_USERS,
  clearUsersFromStore,
  deleteUserFromList,
  GET_USERS,
  setUserList,
} from './actions';

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
  yield put(clearUsersFromStore());
  try {
    action.payload.map((item) => {
      setNewUserToDB(item);
    });
  } catch (e) {
    console.log(e);
  }
}

export function* sagaWatcherUserList() {
  yield takeEvery(GET_USERS, ensureAddUserToList);
  yield takeEvery(DELETE_FROM_DB, ensureDeleteUserFromList);
  yield takeEvery(ADD_USERS, ensureAddUsersToDB);
}
