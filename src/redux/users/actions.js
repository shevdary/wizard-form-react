export const GET_USERLIST = 'USERLIST/GET_USERLIST';
export const SET_USERLIST = 'USERLIST/SET_USERLIST';
export const DELETE_USER_FROM_LIST = 'USERLIST/DELETE_USER';
// actions
export const getUserListFromDB = () => ({
  type: GET_USERLIST,
});

export const setUserList = (users) => ({
  type: SET_USERLIST,
  payload: users,
});

export const deleteUserFromList = (id) => ({
  type: DELETE_USER_FROM_LIST,
  payload: id,
});
