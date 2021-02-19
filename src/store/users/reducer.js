import { SET_USERS, DELETE_USER_FROM_LIST, USERS_COUNT,CLEAR_ALL_USERS } from './actions';

const initialState = {
  data: null,
  dataCount: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_USER_FROM_LIST:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case USERS_COUNT:
      return { ...state, dataCount: action.payload };
    case CLEAR_ALL_USERS:
      return state;

    default:
      return state;
  }
};
export default reducer;
