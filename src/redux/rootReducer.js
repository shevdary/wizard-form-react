import { combineReducers } from 'redux';
import { reducer as reducerForm } from 'redux-form';
import reducer from 'redux/user/reducers';
import { reducer as reducerTab } from 'redux/tab/reducers';

export const rootReducer = combineReducers({
  user: reducer,
  tab: reducerTab,
  form: reducerForm,
});
