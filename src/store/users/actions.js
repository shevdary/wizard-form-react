export const GET_USERS = 'USERS/GET_USERS';
export const SET_USERS = 'USERS/SET_USERS';
export const DELETE_USER_FROM_LIST = 'USERS/DELETE_USER';

export const USERS_COUNT = 'USERS/USERS_COUNT';
// actions
export const getUserListFromDB = (startIndex, endIndex) => ({
  type: GET_USERS,
  payload: { startIndex, endIndex },
});

export const setUserList = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const deleteUserFromList = (id) => ({
  type: DELETE_USER_FROM_LIST,
  payload: id,
});

export const setUsersCount = (count) => ({
  type: USERS_COUNT,
  payload: count,
});
