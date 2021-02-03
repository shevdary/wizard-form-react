import { SET_USER_INFO, USER_RESET } from './actions';

const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      return { ...state, ...action.payload };
    }
    case USER_RESET:
      return {};
    default:
      return state;
  }
};
export default reducer;
