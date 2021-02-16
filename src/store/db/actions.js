// const
export const ADD_TO_DB = 'DB/ADD_TO_BD';
export const SET_FAILED = 'DB/SET_BD_FAILED';
export const DELETE_FROM_DB = 'DB/DELETE_FROM_DB';
export const UPDATE_USER_DB = 'DB/UPDATE_USER_DB';
export const REMOVE_OLD_VERSION = 'DB/REMOVE_OLD_VERSION';
// actions
export const addValueToDB = () => ({
  type: ADD_TO_DB,
});

export const deleteUserFromDB = (id) => ({
  type: DELETE_FROM_DB,
  payload: id,
});

export const updateUserToDB = (id) => ({
  type: UPDATE_USER_DB,
  payload: id,
});

export const setValueFailed = () => ({
  type: SET_FAILED,
});

export const removeOldVersion = () => ({
  type: REMOVE_OLD_VERSION,
});
