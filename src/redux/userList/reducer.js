import { SET_USERLIST, DELETE_USER_FROM_LIST } from './actions';

const initialState = {
  userList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERLIST:
      return {
        userList: action.payload,
      };
    case DELETE_USER_FROM_LIST:
      return {
        userList: state.userList.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};
export default reducer;
