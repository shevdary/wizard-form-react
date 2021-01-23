/* eslint-disable */
import { SubmissionError } from 'redux-form';
import { getUsers } from '../indexeDB/database';

export const validate = (values) => {
  return getUsers().then((res) => {
    if (!values.username) {
      throw new SubmissionError({
        username: 'field is required',
      });
    } else {
      res.map((item) => {
        if (values.username === item.name) {
          throw new SubmissionError({
            username: 'username already exist',
          });
        }
      });
    }
    if (!values.password) {
      throw new SubmissionError({
        password: 'field is required',
      });
    }
    if (values.password !== values.repeatPassword) {
      throw new SubmissionError({
        repeatPassword: 'password don`t match',
      });
    }
  });
  return Promise.resolve();
};
