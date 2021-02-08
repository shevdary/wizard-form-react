// const
export const SET_DB = 'DB/SET_BD';
export const SET_SUCCESS = 'DB/SET_BD_SUCCESS';
export const SET_FAILED = 'DB/SET_BD_FAILED';
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
