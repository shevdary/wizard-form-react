import * as List from './actions';

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case List.LOAD_START:
      return { isLoading: true };
    case List.LOAD_STOP:
      return { isLoading: false };
    default:
      return state;
  }
};
export default reducer;
