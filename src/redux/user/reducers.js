// const
const CREATE = 'USER/CREATE_USER';
const ADD_INFO = 'USER/ADD_INFO';
const LOAD_SAVED_INFO = 'USER/LOAD_SAVED_INFO';
// actions
export const update = (data) => ({
  type: ADD_INFO,
  payload: data,
});
export const loadFromStorage = () => ({
  type: LOAD_SAVED_INFO,
});
// reducers
const initialState = {
  user: {},
  isValid: false,
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
    default:
      return state;
  }
};
export default reducer;
