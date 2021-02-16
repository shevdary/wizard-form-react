import { call, takeEvery, put } from 'redux-saga/effects';
// db
import { getUserListFromDB } from 'indexedDB/database';
// store
import { startLoad, stopLoad } from 'store/loader';
import { DELETE_FROM_DB } from 'store/db/actions';
import { deleteUserFromList, GET_USERS, setUserList } from './actions';

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

export function* sagaWatcherUserList() {
  yield takeEvery(GET_USERS, ensureAddUserToList);
  yield takeEvery(DELETE_FROM_DB, ensureDeleteUserFromList);
}
