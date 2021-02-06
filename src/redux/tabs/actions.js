// const
export const TAB_LIST = 'TAB/TAB_LIST';
export const CURRENT_TAB = 'TAB/CURRENT_TAB';
export const TAB_REMOVE = 'TAB/TAB_REMOVE';
export const TAB_FAILED = 'TAB/TAB_FAILED';
export const SET_PASSED_TABS = 'TAB/SET_PASSED_TABS';
// actions
export const setTabsToList = (tabName) => ({
  type: TAB_LIST,
  payload: tabName,
});
export const setCurrentTab = (tabName) => ({
  type: CURRENT_TAB,
  payload: tabName,
});
export const removeTabsValue = () => ({
  type: TAB_REMOVE,
});
export const setTabFailed = () => ({
  type: TAB_FAILED,
});
export const setPassedTabs = (tabs) => ({
  type: SET_PASSED_TABS,
  payload: tabs,
});
