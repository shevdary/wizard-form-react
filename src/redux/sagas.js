import { takeEvery, put, select } from 'redux-saga/effects';
// user reducer
import { userSelector } from 'redux/user/selector';
import { resetUserValue, SET_USER_INFO } from 'redux/user/actions';
// indexedDB
import { SET_DB, setValueFailed, setValueSuccess } from 'redux/db/reducers';
import { addNewUserToDB } from 'indexedDB/database';
// tabs
import {
  addRouterTab,
  resetTabsValue,
  setCurrentTab,
} from 'redux/tabs/actions';
// utils
import { createBrowserHistory } from 'history';
import {
  removeAllFromLocalStorage,
  setTabToLocalStorage,
  setUserToLocalStorage,
} from 'utils/localStorage';

export function* setUserDataToLocalStorage(action) {
  try {
    const history = createBrowserHistory();
    const location = history.location.pathname;
    const getActiveTabFromPath = location.substring(
      location.lastIndexOf('/') + 1
    );

    setUserToLocalStorage(action.payload);
    setTabToLocalStorage(getActiveTabFromPath);

    yield put(setCurrentTab(getActiveTabFromPath));
    yield put(addRouterTab(getActiveTabFromPath));
  } catch (e) {
    console.log(e);
    yield put({ type: 'REQUEST/UPLOAD_FAIL' });
  }
}

export function* addValueToDB() {
  try {
    const values = yield select(userSelector);

    addNewUserToDB(values);
    removeAllFromLocalStorage();

    yield put(setValueSuccess());
    yield put(resetUserValue());
    yield put(resetTabsValue());
  } catch (e) {
    console.log(e, 'e');
    yield put(setValueFailed());
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_USER_INFO, setUserDataToLocalStorage);
  yield takeEvery(SET_DB, addValueToDB);
}
