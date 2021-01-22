// const
const CREATE_USER = 'USER/CREATE_USER';
const ADD_PERSONAL_DATA = 'USERDATA/ADD_PERSONAL_DATA';

// actions
export const addUserData = (data) => ({
  type: ADD_PERSONAL_DATA,
  payload: data,
});

// reducers
const initialState = {
  user: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, posts: state.posts.concat([action.payload]) };
    case ADD_PERSONAL_DATA: {
      return {
        ...state,
        user: Object.assign(state.user, action.payload),
      };
    }
    default:
      return state;
  }
};
export default reducer;
