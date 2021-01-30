import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import reducer from 'redux/user/reducers';
import { reducer as reducerTab } from 'redux/tabs/reducers';
import { reducer as reducerDb } from 'redux/db/reducers';

export const rootReducer = combineReducers({
  user: reducer,
  db: reducerDb,
  tab: reducerTab,
  form: reducerForm,
});
