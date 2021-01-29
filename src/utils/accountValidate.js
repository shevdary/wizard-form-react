/*eslint-disable*/
import { getUsers } from '../indexedDB/database';

export const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'field is required';
  }

  if (!values.password) {
    errors.password = 'field is required';
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'field is required';
  } else if (values.password !== values.repeatPassword) {
    errors.repeatPassword = 'password don`t match';
  }
  return errors;
};

export const asyncValidate = (values) =>
  getUsers().then((res) => {
    res.map((item) => {
      if (item.username === values.username) {
        throw { username: 'That username is taken' };
      }
    });
  });
