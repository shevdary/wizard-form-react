export const GET_USERS = 'USERS/GET_USERS';
export const SET_USERS = 'USERS/SET_USERS';
export const DELETE_USER_FROM_LIST = 'USERS/DELETE_USER';
// actions
export const getUserListFromDB = () => ({
  type: GET_USERS,
});

export const setUserList = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const deleteUserFromList = (id) => ({
  type: DELETE_USER_FROM_LIST,
  payload: id,
});
