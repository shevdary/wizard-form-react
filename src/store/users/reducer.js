import { SET_USERS, DELETE_USER_FROM_LIST } from './actions';

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

    default:
      return state;
  }
};
export default reducer;
