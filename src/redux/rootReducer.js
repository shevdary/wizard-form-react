import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './userData/reducers';

export const rootReducer = combineReducers({
  user: reducer,
  form: formReducer,
});
