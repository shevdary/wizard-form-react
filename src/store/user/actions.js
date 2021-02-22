// const
export const UPDATE_USER = 'USER/UPDATE_USER';
export const LOAD_SAVED_USER = 'USER/LOAD_SAVED_USER';
export const REMOVE_USER = 'USER/REMOVE_USER';
export const GET_USER = 'USER/GET_USER';
export const USER_FAILED = 'USER/USER_FAILED';
export const GET_USER_BY_ID = 'USER/GET_USER_BY_ID';
export const CLEAR_VALUES = 'USER/CLEAR_VALUES';
// actions
export const updateUser = (data) => ({
  type: UPDATE_USER,
  payload: data,
});
export const loadFromStorage = () => ({
  type: LOAD_SAVED_USER,
});
export const removeUser = () => ({
  type: REMOVE_USER,
});

export const loadUserFromLocalStorage = (push) => ({
  type: GET_USER,
  ...push,
});

export const getUserFailed = () => ({
  type: USER_FAILED,
});

export const getUserById = (id) => ({
  type: GET_USER_BY_ID,
  payload: id,
});
export const clearUserFromLocalStorage = () => ({
  type: CLEAR_VALUES,
});
