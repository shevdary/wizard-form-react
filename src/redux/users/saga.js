import { call, takeEvery, put } from 'redux-saga/effects';
// db
import { getUserListFromDB } from 'indexedDB/database';
// redux
import { startLoad, stopLoad } from 'redux/loader';
import { DELETE_FROM_DB } from 'redux/db/actions';
import { deleteUserFromList, GET_USERLIST, setUserList } from './actions';

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
  yield takeEvery(GET_USERLIST, ensureAddUserToList);
  yield takeEvery(DELETE_FROM_DB, ensureDeleteUserFromList);
}
