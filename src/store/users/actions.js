export const GET_USERS = 'USERS/GET_USERS';
export const SET_USERS = 'USERS/SET_USERS';
export const DELETE_USER_FROM_LIST = 'USERS/DELETE_USER';
export const USERS_COUNT = 'USERS/USERS_COUNT';

export const CLEAR_ALL_USERS = 'USERS/CLEAR_ALL_USERS';
export const GENERATE_USERS = 'USERS/GENERATE_USERS';

// actions
export const getUsersFromDB = (currentPage, itemOnPage) => ({
  type: GET_USERS,
  payload: { currentPage, itemOnPage },
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

export const clearUsersFromStore = () => ({
  type: CLEAR_ALL_USERS,
});

export const generateUsers = (itemsCount) => ({
  type: GENERATE_USERS,
  payload: itemsCount,
});
