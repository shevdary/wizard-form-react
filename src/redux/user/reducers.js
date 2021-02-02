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
// reducers
const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      return Object.assign(state, action.payload.values);
    }
    case USER_RESET:
      return {};
    default:
      return state;
  }
};
export default reducer;
