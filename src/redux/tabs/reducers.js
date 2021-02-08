import { PASSED_TAB, SET_PASSED_TABS, TAB_LIST, TAB_RESET } from './actions';
// reducer
const initialState = {
  currentTab: null,
  passedTabs: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TAB_LIST:
      return { ...state, passedTabs: [...state.passedTabs, action.payload] };
    case PASSED_TAB:
      return { ...state, currentTab: action.payload };
    case TAB_RESET:
      return initialState;
    case SET_PASSED_TABS:
      return { ...state, passedTabs: action.payload };

    default:
      return state;
  }
};
export default reducer;
