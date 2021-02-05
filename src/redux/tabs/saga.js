import { takeEvery, put } from 'redux-saga/effects';
// redux
import { GET_USER, update } from 'redux/user/actions';
import { SET_DB } from 'redux/db/actions';
// utils
import {
  getUserFromLocalStorage,
  setTabToLocalStorage,
} from 'utils/localStorage';
import { createBrowserHistory } from 'history';
// action
import {
  PASSED_TAB,
  removeTabsValue,
  setPassedTabs,
  setPassedTabToList,
  setTabFailed,
} from './actions';

export function* setTabToStorage(action) {
  try {
    const history = createBrowserHistory();
    const location = history.location.pathname;
    const getActiveTabFromPath = location.substring(
      location.lastIndexOf('/') + 1
    );

    setTabToLocalStorage(action.payload);

    yield put(setPassedTabToList(getActiveTabFromPath));
  } catch (e) {
    yield put(setTabFailed());
  }
}
export function* getTabFromStorage() {
  try {
    const valuesFromLocalStore = getUserFromLocalStorage();

    if (
      valuesFromLocalStore &&
      Object.keys(valuesFromLocalStore).includes('username' && 'password')
    ) {
      yield put(update(valuesFromLocalStore));
      yield put(setPassedTabs(['account']));
      if (Object.keys(valuesFromLocalStore).includes('firstName')) {
        yield put(setPassedTabs(['account', 'profile']));
      }
      if (Object.keys(valuesFromLocalStore).includes('company')) {
        yield put(setPassedTabs(['account', 'profile', 'contact']));
      }
    }
  } catch (e) {
    yield put(setTabFailed());
  }
}
export function* removeTabFromLocalStorage() {
  try {
    yield put(removeTabsValue());
  } catch (e) {
    yield put(setTabFailed());
  }
}

export function* sagaWatcherTab() {
  yield takeEvery(PASSED_TAB, setTabToStorage);
  yield takeEvery(GET_USER, getTabFromStorage);
  yield takeEvery(SET_DB, removeTabFromLocalStorage);
}
