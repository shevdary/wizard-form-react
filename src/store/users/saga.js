import { takeEvery, put, throttle, call } from 'redux-saga/effects';
// db
import {
  addArrayOfUsersToDB,
  filterUsersByName,
  getUsersFromDB,
} from 'indexedDB/database';
// store
import * as Users from 'store/users';
import { startLoad, stopLoad } from 'store/loader';
import { DELETE_FROM_DB } from 'store/db/actions';
import { ensureClearAllUsers } from 'store/db/saga';
// utils
import { arrayOfUsers } from 'utils/generate';
import { usersSlice } from 'utils/sliceUsers';

export function* ensureAddUserToStore({
  payload: { currentPage, itemOnPage, optionValue },
}) {
  yield put(startLoad());
  try {
    const users = yield call(getUsersFromDB);

    const usersCount = optionValue?.[0] ? optionValue.length : users.length;
    const itemsOnPage = optionValue?.[0]
      ? usersSlice(currentPage, itemOnPage, optionValue)
      : usersSlice(currentPage, itemOnPage, users);

    yield put(Users.setUserList(itemsOnPage, usersCount));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(stopLoad());
  }
}

export function* ensureDeleteUserFromStore(action) {
  try {
    yield put(Users.deleteUser(action.payload));
  } catch (e) {
    console.log(e);
  }
}
export function* ensureGenerateUsers(action) {
  yield put(startLoad());
  try {
    yield ensureClearAllUsers();
    yield addArrayOfUsersToDB(arrayOfUsers(action.payload));
    yield put(Users.getUserListFromDB(1, 5));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(stopLoad());
  }
}

export function* ensureFilterUsers({ payload }) {
  yield put(startLoad());
  try {
    const users = yield call(filterUsersByName, payload);
    yield put(Users.getUserListFromDB(1, 5, users));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(stopLoad());
  }
}

export function* sagaWatcherUserList() {
  yield takeEvery(Users.GET_USERS, ensureAddUserToStore);
  yield takeEvery(DELETE_FROM_DB, ensureDeleteUserFromStore);
  yield takeEvery(Users.GENERATE_USERS, ensureGenerateUsers);
  yield throttle(1000, Users.FIND_NAME, ensureFilterUsers);
}
