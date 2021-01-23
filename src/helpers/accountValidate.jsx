/* eslint-disable */
import { SubmissionError } from 'redux-form';
import { setValues } from '../indexeDB/database';

export const validate = (values) => {
  return setValues(values)
    .then(() => {
      if (!values.username) {
        throw new SubmissionError({
          username: 'Field is required',
        });
      }
      if (!values.password) {
        throw new SubmissionError({
          password: 'Field is required',
        });
      }
      if (values.password !== values.repeatPassword) {
        throw new SubmissionError({
          repeatPassword: 'password don`t match',
        });
      }
    })
    .catch(console.log('err'));
};
