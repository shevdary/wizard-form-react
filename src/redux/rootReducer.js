import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './user/reducers';

export const rootReducer = combineReducers({
  user: reducer,
  form: formReducer,
});
