// const
const CREATE = 'USER/CREATE_USER';
const ADD_INFO = 'USER/ADD_INFO';
const USERDATA_VALID = 'USER/VALID_DATA';
const UPLOAD_USERS = 'REQUEST/UPLOAD_USERS';
const NEXT_STEP = 'REDIRECT/NEXT_STEP';
// actions
export const addUserData = (data) => ({
  type: ADD_INFO,
  payload: data,
});
export const getUserList = (data) => ({
  type: UPLOAD_USERS,
  payload: data,
});
export const redirectToNextStep = (path) => ({
  type: USERDATA_VALID,
  payload: path,
});
export const redirectStep = (pageCount) => ({
  type: NEXT_STEP,
  payload: pageCount,
});
// reducers
const initialState = {
  user: {},
  isValid: false,
  previousStep: [],
  nextStep: null,
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
    case USERDATA_VALID:
      return {
        ...state,
        previousStep: [...state.previousStep, action.payload],
      };
    case UPLOAD_USERS:
      return { ...state, userList: action.payload };
    case NEXT_STEP:
      return { ...state, nextStep: action.payload };
    default:
      return state;
  }
};
export default reducer;
