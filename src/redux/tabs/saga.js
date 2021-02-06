/*eslint-disable*/

import { takeEvery, put } from 'redux-saga/effects';
import { createBrowserHistory } from 'history';
// redux
import * as User from 'redux/user/actions';
import * as Tab from 'redux/tabs/index';
import { ADD_TO_DB } from 'redux/db/actions';
// utils
import {
  getUserFromLocalStorage,
  removeAllFromLocalStorage,
  setTabToLocalStorage,
} from 'utils/localStorage';

export function* ensureSetTabToStorage(action) {
  try {
    const history = createBrowserHistory();
    const location = history.location.pathname;
    const getActiveTabFromPath = location.substring(
      location.lastIndexOf('/') + 1
    );

    setTabToLocalStorage(action.payload);

    yield put(Tab.setTabsToList(getActiveTabFromPath));
  } catch (e) {
    yield put(Tab.setTabFailed());
  }
}
export function* getTabFromStorage() {
  try {
    const valuesFromLocalStore = getUserFromLocalStorage();

    if (
      valuesFromLocalStore &&
      Object.keys(valuesFromLocalStore).includes('username' && 'password')
    ) {
      yield put(Tab.setPassedTabs(['account']));

      if (Object.keys(valuesFromLocalStore).includes('firstName'))
        yield put(Tab.setPassedTabs(['account', 'profile']));

      if (Object.keys(valuesFromLocalStore).includes('company'))
        yield put(Tab.setPassedTabs(['account', 'profile', 'contact']));
    }
  } catch (e) {
    yield put(Tab.setTabFailed());
  }
}
export function* ensureRemoveFromStore() {
  try {
    yield put(Tab.removeTabsValue());
  } catch (e) {
    yield put(Tab.setTabFailed());
  }
}

export function* ensureRemoveLocalStorage() {
  try {
    removeAllFromLocalStorage();
    yield put(Tab.removeTabsValue());
  } catch (e) {
    yield put(Tab.setTabFailed());
  }
}
export function* sagaWatcherTab() {
  yield takeEvery(Tab.CURRENT_TAB, ensureSetTabToStorage);
  yield takeEvery(User.GET_USER, getTabFromStorage);
  yield takeEvery(ADD_TO_DB, ensureRemoveFromStore);
  yield takeEvery(User.REMOVE_USER, ensureRemoveLocalStorage);
}
