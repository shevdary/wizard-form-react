import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { userMiddleware } from './middleware';
import { sagaWatcher } from './sagas';
import { rootReducer } from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(userMiddleware, sagaMiddleware))
);
sagaMiddleware.run(sagaWatcher);
