import { SET_USERS, FIND_NAME, DELETE_USER, CLEAR_ALL_USERS } from './actions';

const initialState = {
  data: null,
  dataCount: 0,
  filter: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        data: action.payload.data,
        dataCount: action.payload.dataCount,
      };
    case DELETE_USER:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };
    case CLEAR_ALL_USERS:
      return {
        ...state,
        data: null,
      };
    case FIND_NAME:
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
