import { SET_DB, SET_FAILED, SET_SUCCESS } from './actions';

// reducers
const initialState = {
  isError: null,
  isLoad: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DB:
      return {
        ...state,
        isLoad: true,
      };
    case SET_FAILED:
      return {
        ...state,
        isLoad: false,
        isError: true,
      };
    case SET_SUCCESS:
      return {
        ...state,
        isLoad: false,
        isError: false,
      };
    default:
      return state;
  }
};
export default reducer;
