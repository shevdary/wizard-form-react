/*eslint-disable*/
import { call, takeEvery, put } from 'redux-saga/effects';
// db
import { getUserListFromDB } from 'indexedDB/database';
// store
import { startLoad, stopLoad } from 'store/loader';
import { DELETE_FROM_DB } from 'store/db/actions';
import {
  deleteUserFromList,
  GET_USERS,
  setUserList,
  setUsersCount,
} from './actions';

export function* ensureAddUserToList({ payload: { startIndex, endIndex } }) {
  yield put(startLoad());
  try {
    const items = yield call(getUserListFromDB);
    const itemsOnPage = items.slice(
      startIndex * endIndex - endIndex,
      startIndex * endIndex
    );

    yield put(setUsersCount(items.length));
    yield put(setUserList(itemsOnPage));
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
