import { ADD_TO_DB, SET_FAILED } from './actions';

// reducers
const initialState = {
  isError: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DB:
      return {
        ...state,
      };
    case SET_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;
