import { UPDATE_USER, REMOVE_USER } from './actions';

const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, ...action.payload };
    case REMOVE_USER:
      return initialState;
    default:
      return state;
  }
};
export default reducer;
