/*eslint-disable*/

import { getUsers } from '../indexedDB/database';

export const validate = (values) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'field is required';
  } else {
    getUsers().then((res) => {
      res.map((item) => {
        if (values.username === item.name) {
          errors.username = 'username already exist';
        }
      });
    });
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
