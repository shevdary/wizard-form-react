import { all, fork } from 'redux-saga/effects';
// sagas
import { sagaWatcherUser } from 'store/user/saga';
import { sagaWatcherTab } from 'store/tabs/saga';
import { sagaWatcherDB } from 'store/db/saga';
import { sagaWatcherUserList } from 'store/users/saga';

export function* sagaWatcher() {
  yield all([
    fork(sagaWatcherUser),
    fork(sagaWatcherTab),
    fork(sagaWatcherDB),
    fork(sagaWatcherUserList),
  ]);
}
