// const
export const TAB_LIST = 'TAB/TAB_LIST';
export const PASSED_TAB = 'TAB/PASSED_TAB';
export const TAB_RESET = 'TAB/TAB_RESET';
export const TAB_FAILED = 'TAB/TAB_FAILED';
// actions
export const setPassedTabToList = (tabName) => ({
  type: TAB_LIST,
  payload: tabName,
});
export const setPassedTab = (tabName) => ({
  type: PASSED_TAB,
  payload: tabName,
});
export const removeTabsValue = () => ({
  type: TAB_RESET,
});
export const setTabFailed = () => ({
  type: TAB_FAILED,
});
