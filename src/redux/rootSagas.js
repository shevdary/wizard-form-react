import { all, fork } from 'redux-saga/effects';
// sagas
import { sagaWatcherUser } from 'redux/user';
import { sagaWatcherTab } from 'redux/tabs';
import { sagaWatcherDB } from 'redux/db/saga';
import { sagaWatcherUserList } from 'redux/userList';

export function* sagaWatcher() {
  yield all([
    fork(sagaWatcherUser),
    fork(sagaWatcherTab),
    fork(sagaWatcherDB),
    fork(sagaWatcherUserList),
  ]);
}
