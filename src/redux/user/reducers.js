/*eslint-disable*/
// const
const CREATE = 'USER/CREATE_USER';
export const ADD_INFO = 'USER/ADD_INFO';
export const LOAD_SAVED_INFO = 'USER/LOAD_SAVED_INFO';
export const USER_RESET = 'USER/USER_RESET';
// actions
export const update = (data) => ({
  type: ADD_INFO,
  payload: data,
});
export const loadFromStorage = () => ({
  type: LOAD_SAVED_INFO,
});
export const resetUserValue = () => ({
  type: USER_RESET,
});
// reducers
const initialState = {
  user: {},
  isLoad: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return { ...state, posts: state.posts.concat([action.payload]) };
    case ADD_INFO: {
      return {
        ...state,
        user: Object.assign(state.user, action.payload),
      };
    }
    case LOAD_SAVED_INFO:
      return {
        ...state,
        isLoad: true,
      };
    case USER_RESET:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};
export default reducer;
