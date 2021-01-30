import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from 'redux/user/reducers';
import tab from 'redux/tabs/reducers';
import db from 'redux/db/reducers';

export const rootReducer = combineReducers({
  user,
  db,
  tab,
  form,
});
