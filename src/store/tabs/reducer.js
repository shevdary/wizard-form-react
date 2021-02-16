import { CURRENT_TAB, SET_PASSED_TABS, TAB_LIST, TAB_REMOVE } from './actions';
// reducer
const initialState = {
  currentTab: null,
  passedTabs: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TAB_LIST:
      return {
        ...state,
        passedTabs: state.passedTabs.includes(action.payload)
          ? state.passedTabs
          : [...state.passedTabs, action.payload],
      };
    case CURRENT_TAB:
      return { ...state, currentTab: action.payload };
    case TAB_REMOVE:
      return initialState;
    case SET_PASSED_TABS:
      return { ...state, passedTabs: action.payload };

    default:
      return state;
  }
};
export default reducer;
