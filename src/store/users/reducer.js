import { SET_USERS, DELETE_USER_FROM_LIST, CLEAR_ALL_USERS } from './actions';

const initialState = {
  users: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        users: action.payload,
      };
    case DELETE_USER_FROM_LIST:
      return {
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case CLEAR_ALL_USERS:
      return state;

    default:
      return state;
  }
};
export default reducer;
