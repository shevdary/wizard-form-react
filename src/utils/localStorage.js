export const setItems = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
export const getItem = (key) => JSON.parse(localStorage.getItem(key));
// user
export const getUserFromLocalStorage = () => getItem('user');
export const setUserToLocalStorage = (data) => setItems('user', { ...data });
// tab
export const setTabToLocalStorage = (data) => setItems('tab', data);
export const getTabFromLocalStorage = () => getItem('tab');
// clear all from localStorage
export const removeAllFromLocalStorage = () => localStorage.clear();
