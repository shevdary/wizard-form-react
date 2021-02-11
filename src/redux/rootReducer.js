import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from 'redux/user/reducer';
import tab from 'redux/tabs/reducer';
import db from 'redux/db/reducers';
import users from 'redux/userList/reducer';
import loader from 'redux/loader/reducer';

export const rootReducer = combineReducers({
  user,
  db,
  tab,
  form,
  users,
  loader,
});
