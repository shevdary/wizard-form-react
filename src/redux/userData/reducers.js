// const
const CREATE_USER = 'USER/CREATE_USER';
const ADD_PERSONAL_DATA = 'USERDATA/ADD_PERSONAL_DATA';
const USERDATA_VALID = 'USERDATA/VALID_DATA';
// actions
export const addUserData = (data) => ({
  type: ADD_PERSONAL_DATA,
  payload: data,
});
export const getUsername = (data) => ({
  type: 'REQUEST_USERNAME',
  payload: data,
});
export const redirectToNextStep = (path) => ({
  type: USERDATA_VALID,
  payload: path,
});
// reducers
const initialState = {
  user: {},
  isValid: false,
  previousStep: [],
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
    case USERDATA_VALID:
      return {
        ...state,
        previousStep: [...state.previousStep, action.payload],
      };
    case 'REQUEST_USERNAME':
      return { ...state, userList: action.payload };
    default:
      return state;
  }
};
export default reducer;
