// const
export const SET_DB = 'USER/SET_BD';
const SET_SUCCESS = 'USER/SET_BD_SUCCESS';
const SET_FAILED = 'USER/SET_BD_FAILED';
// actions
export const setValueToDB = () => ({
  type: SET_DB,
});

export const setValueFailed = () => ({
  type: SET_FAILED,
});

export const setValueSuccess = () => ({
  type: SET_SUCCESS,
});
// reducers
const initialState = {
  isError: null,
  isLoad: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DB:
      return {
        ...state,
        isLoad: true,
      };
    case SET_FAILED:
      return {
        ...state,
        isLoad: false,
        isError: true,
      };
    case SET_SUCCESS:
      return {
        ...state,
        isLoad: false,
        isError: false,
      };
    default:
      return state;
  }
};
export default reducer;
