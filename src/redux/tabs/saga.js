import { takeEvery, put } from 'redux-saga/effects';
import { GET_USER, update } from 'redux/user/actions';
import { SET_DB } from 'redux/db/reducers';
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
  setPassedTabToList,
  setTabFailed,
} from './actions';

export function* setTabToStorage() {
  try {
    const history = createBrowserHistory();
    const location = history.location.pathname;
    const getActiveTabFromPath = location.substring(
      location.lastIndexOf('/') + 1
    );

    setTabToLocalStorage(getActiveTabFromPath);

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
    )
      yield put(update(valuesFromLocalStore));
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
