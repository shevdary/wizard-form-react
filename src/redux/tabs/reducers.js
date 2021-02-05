import { PASSED_TAB, TAB_LIST, TAB_RESET } from './actions';
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
    default:
      return state;
  }
};
export default reducer;
