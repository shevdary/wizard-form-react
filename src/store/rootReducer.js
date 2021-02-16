import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import user from 'store/user/reducer';
import tab from 'store/tabs/reducer';
import db from 'store/db/reducers';
import users from 'store/users/reducer';
import loader from 'store/loader/reducer';

export const rootReducer = combineReducers({
  user,
  db,
  tab,
  form,
  users,
  loader,
});
