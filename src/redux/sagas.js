import { takeEvery, put, select } from 'redux-saga/effects';
// user reducer
import { userSelector } from 'redux/user/selector';
import { resetUserValue, SET_USER_INFO } from 'redux/user/reducers';
// indexedDB
import { SET_DB, setValueFailed, setValueSuccess } from 'redux/db/reducers';
import { addNewUser } from 'indexedDB/database';
// tabs
import { addRouterTab, setCurrentTab } from 'redux/tabs/reducers';
// utils
import {
  removeAllFromLocalStorage,
  setTabToLocalStorage,
  setUserToLocalStorage,
} from 'utils/localStorage';

export function* setUserDataToLocalStorage({ payload: { values, history } }) {
  try {
    const location = history.location.pathname;
    const getActiveTabFromPath = location.substring(
      location.lastIndexOf('/') + 1
    );

    setUserToLocalStorage(values);
    setTabToLocalStorage(getActiveTabFromPath);

    yield put(setCurrentTab(getActiveTabFromPath));
    yield put(addRouterTab(getActiveTabFromPath));

    if (location.includes('account')) history.push('/create-user/profile');
    if (location.includes('profile')) history.push('/create-user/contact');
    if (location.includes('contact')) history.push('/create-user/capabilities');
    if (location.includes('capabilities')) history.push('/user-list');
  } catch (e) {
    yield put({ type: 'REQUEST/UPLOAD_FAIL' });
  }
}

export function* addValueToDB() {
  try {
    const values = yield select(userSelector);

    addNewUser(values);
    removeAllFromLocalStorage();

    yield put(setValueSuccess());
    yield put(resetUserValue());
  } catch (e) {
    yield put(setValueFailed());
  }
}

export function* sagaWatcher() {
  yield takeEvery(SET_USER_INFO, setUserDataToLocalStorage);
  yield takeEvery(SET_DB, addValueToDB);
}
