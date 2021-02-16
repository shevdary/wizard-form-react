import { LOAD_STOP, LOAD_START } from './actions';

const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_START:
      return { isLoading: true };
    case LOAD_STOP:
      return { isLoading: false };
    default:
      return state;
  }
};

export default reducer;
