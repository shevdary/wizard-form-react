import { all, fork } from 'redux-saga/effects';
// sagas
import { sagaWatcherUser } from 'redux/user/saga';
import { sagaWatcherTab } from 'redux/tabs/saga';
import { sagaWatcherDB } from 'redux/db/saga';
import { sagaWatcherUserList } from 'redux/userList/saga';

export function* sagaWatcher() {
  yield all([
    fork(sagaWatcherUser),
    fork(sagaWatcherTab),
    fork(sagaWatcherDB),
    fork(sagaWatcherUserList),
  ]);
}
