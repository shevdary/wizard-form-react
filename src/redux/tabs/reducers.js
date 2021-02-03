import { CURRENT_TAB, TAB_LIST, TAB_RESET } from './actions';
// reducer
const initialState = {
  currentTab: null,
  tabs: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TAB_LIST:
      return { ...state, tabs: [...state.tabs, action.payload] };
    case CURRENT_TAB:
      return { ...state, currentTab: action.payload };
    case TAB_RESET:
      return initialState;
    default:
      return state;
  }
};
export default reducer;
