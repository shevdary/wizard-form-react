import { takeEvery, put, select } from 'redux-saga/effects';
// user reducer
import { userFormSelector, userSelector } from 'redux/user/selector';
import { resetUserValue, update } from 'redux/user/reducers';
// indexedDB
import { SET_DB, setValueFailed, setValueSuccess } from 'redux/db/reducers';
import { addNewUser } from 'indexedDB/database';
// tabs
import { tabsSelector } from 'redux/tabs/selector';
import { addRouterTab, CURRENT_TAB } from 'redux/tabs/reducers';
// utils
import { setItem, setPath } from 'utils/localStorage';

export function* uploadToRedux() {
  try {
    const value = yield select(userSelector);
    const { values } = yield select(userFormSelector);
    const { tabs, currentTab } = yield select(tabsSelector);

    yield put(update(values));
    setPath(currentTab);
    setItem(value);

    if (!tabs.includes(currentTab)) {
      yield put(addRouterTab(currentTab));
    }
  } catch (e) {
    yield put({ type: 'REQUEST/UPLOAD_FAIL' });
  }
}

export function* addValueToDB() {
  try {
    const values = yield select(userSelector);
    addNewUser(values);
    yield put(setValueSuccess());
    yield put(resetUserValue());
  } catch (e) {
    yield put(setValueFailed());
  }
}

export function* sagaWatcher() {
  yield takeEvery(CURRENT_TAB, uploadToRedux);
  yield takeEvery(SET_DB, addValueToDB);
}
