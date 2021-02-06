import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from 'redux/user/reducers';
import tab from 'redux/tabs/reducers';
import db from 'redux/db/reducers';
import users from 'redux/userList/reducers';
import loader from 'redux/loader/reducers';

export const rootReducer = combineReducers({
  user,
  db,
  tab,
  form,
  users,
  loader,
});
