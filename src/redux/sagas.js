/*eslint-disable*/
import { takeEvery, put, select } from 'redux-saga/effects';
import { userFormSelector, userSelector } from './user/selector';
import { setItem, setPath } from 'utils/localStorage';
import { addNewUser } from 'indexedDB/database';
import { SET_DB, setValueFailed, setValueSuccess } from './db/reducers';
import { tabsSelector } from './tabs/selector';
import { addRouterTab } from './tabs/reducers';
import { resetUserValue, update } from './user/reducers';

export function* uploadToRedux() {
  try {
    const value = yield select(userSelector);
    const { values } = yield select(userFormSelector);
    const { tabs, currentTab } = yield select(tabsSelector);

    if (!tabs.includes(currentTab)) {
      yield put(addRouterTab(currentTab));
    }

    yield put(update(values));
    setPath(currentTab);
    setItem(value);
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
  yield takeEvery('TAB/CURRENT_TAB', uploadToRedux);
  yield takeEvery(SET_DB, addValueToDB);
}
