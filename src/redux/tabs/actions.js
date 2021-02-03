// const
export const TAB_LIST = 'TAB/TAB_LIST';
export const CURRENT_TAB = 'TAB/CURRENT_TAB';
export const TAB_RESET = 'TAB/TAB_RESET';
// actions
export const addRouterTab = (tabName) => ({
  type: TAB_LIST,
  payload: tabName,
});
export const setCurrentTab = (tabName) => ({
  type: CURRENT_TAB,
  payload: tabName,
});
export const resetTabsValue = () => ({
  type: TAB_RESET,
});
