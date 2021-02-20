/*eslint-disable*/
import { call, takeEvery, put, throttle } from 'redux-saga/effects';
// db
import {
  addArrayOfUsersToDB,
  getUserByUsername,
  getUserListFromDB,
} from 'indexedDB/database';
// store
import { startLoad, stopLoad } from 'store/loader';
import { DELETE_FROM_DB } from 'store/db/actions';
import { ensureClearAllUsers } from 'store/db/saga';
import {
  deleteUserFromList,
  GENERATE_USERS,
  GET_USERS,
  setUsersCount,
  setUserList,
  FIND_USERNAME,
  getUsersFromDB,
} from 'store/users/actions';
// utils
import { arrayOfUsers } from 'utils/generate';

export function* ensureAddUserToList({ payload: { currentPage, itemOnPage } }) {
  yield put(startLoad());
  try {
    const users = yield call(getUserListFromDB);
    const itemsOnPage = users.slice(
      currentPage * itemOnPage - itemOnPage,
      currentPage * itemOnPage
    );

    yield put(setUsersCount(users.length));
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
export function* ensureAddUsersToDB(action) {
  yield put(startLoad());
  try {
    yield ensureClearAllUsers();
    yield addArrayOfUsersToDB(arrayOfUsers(action.payload));
    yield put(getUsersFromDB(1, 5));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(stopLoad());
  }
}

export function* ensureFindUsernameInDB(action) {
  try {
    const user = yield getUserByUsername(action.payload);
    yield put(setUserList(user));
  } catch (e) {
    console.log(e);
  }
}

export function* sagaWatcherUserList() {
  yield takeEvery(GET_USERS, ensureAddUserToList);
  yield takeEvery(DELETE_FROM_DB, ensureDeleteUserFromList);
  yield takeEvery(GENERATE_USERS, ensureAddUsersToDB);
  yield throttle(1000, FIND_USERNAME, ensureFindUsernameInDB);
}
