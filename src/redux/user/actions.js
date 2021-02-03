// const
export const SET_USER_INFO = 'USER/SET_USER_INFO';
export const LOAD_SAVED_INFO = 'USER/LOAD_SAVED_INFO';
export const USER_RESET = 'USER/USER_RESET';
// actions
export const update = (data) => ({
  type: SET_USER_INFO,
  payload: data,
});
export const loadFromStorage = () => ({
  type: LOAD_SAVED_INFO,
});
export const resetUserValue = () => ({
  type: USER_RESET,
});
