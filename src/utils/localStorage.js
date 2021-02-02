export const setItem = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
export const getItem = (key) => JSON.parse(localStorage.getItem(key));
// user
export const getUserFromLocalStorage = () => getItem('user');
export const setUserToLocalStorage = (data) => setItem('user', data);
// tab
export const setTabToLocalStorage = (data) => setItem('tab', data);
export const getTabFromLocalStorage = () => getItem('tab');
// clear all from localStorage
export const removeAllFromLocalStorage = () => localStorage.clear();
