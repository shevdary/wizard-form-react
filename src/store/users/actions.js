export const GET_USERS = 'USERS/GET_USERS';
export const SET_USERS = 'USERS/SET_USERS';
export const DELETE_USER = 'USERS/DELETE_USER';
export const CLEAR_ALL_USERS = 'USERS/CLEAR_ALL_USERS';
export const GENERATE_USERS = 'USERS/GENERATE_USERS';
export const FIND_NAME = 'USERS/FIND_USERNAME';
// actions
export const getUsersFromDB = (currentPage, itemOnPage) => ({
  type: GET_USERS,
  payload: { currentPage, itemOnPage, users },
});

export const setUserList = (data, dataCount) => ({
  type: SET_USERS,
  payload: { data, dataCount },
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const clearUsersFromStore = () => ({
  type: CLEAR_ALL_USERS,
});

export const generateUsers = (itemsCount) => ({
  type: GENERATE_USERS,
  payload: itemsCount,
});

export const findUsersByName = (username) => ({
  type: FIND_NAME,
  payload: username,
});
