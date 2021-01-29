// const
const NEXT_TAB = 'TAB/NEXT_TAB';
const PREVIOUS_TAB = 'TAB/PREVIOUS_TAB';
const TAB_LIST = 'TAB/TAB_LIST';
// actions
export const redirectToNext = () => ({
  type: NEXT_TAB,
});
export const redirectToPrevious = () => ({
  type: PREVIOUS_TAB,
});
export const addRouterTab = (tabName) => ({
  type: TAB_LIST,
  payload: tabName,
});
// reducer
const initialState = {
  nextTab: null,
  previousTab: null,
  nextTabName: null,
  tabs: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TAB_LIST:
      return { ...state, tabs: [...state.tabs, action.payload] };
    case NEXT_TAB:
      return {
        ...state,
        nextTab: true,
        previousTab: false,
      };
    case PREVIOUS_TAB:
      return {
        ...state,
        nextTab: false,
        previousTab: true,
      };
    default:
      return state;
  }
};
