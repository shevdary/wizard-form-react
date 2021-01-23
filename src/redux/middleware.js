/* eslint-disable */
// import {CREATE_POST, DELETE_USER} from './types'
// import {addNewUser, deleteUser} from "../database";
// import {requestFailed, requestSuccess, updateListSuccess} from "./actions";

export function userMiddleware() {
  return function (next) {
    return function (action) {
      /* if (action.type === CREATE_POST) {
        addNewUser(action.payload)
          .then(res=>dispatch(requestSuccess(action.payload)))
          .catch(er=>dispatch(requestFailed()))
      }
      if (action.type === DELETE_USER) {
        deleteUser(action.payload)
          .then(res=>dispatch(updateListSuccess(action.payload)))
          .catch(er=>dispatch(requestFailed()))
      } */

      return next(action);
    };
  };
}
