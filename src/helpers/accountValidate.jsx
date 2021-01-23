/*eslint-disable*/
import { SubmissionError } from 'redux-form';
import { getUsers } from '../indexeDB/database';
import { store } from '../redux/store';
import { addUserData, nextStep } from '../redux/userData/reducers';

export const accountDataValidate = (values, dispatch) => {
  if (Object.keys(values).length === 0) {
    throw new SubmissionError({
      username: 'field is required',
      password: 'field is required',
      repeatPassword: 'field is required',
    });
  } else {
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
      if (store.getState().form.userData.submitting) {
        const { username, password } = values;
        dispatch(nextStep());
        dispatch(addUserData({ username, password }));
      }
    });
  }
  return Promise.resolve();
};

export const profileDataValidate = (values) => {
  if (Object.keys(values).length === 0) {
    throw new SubmissionError({
      firstName: 'field is required',
      lastName: 'field is required',
      birthdate: 'field is required',
      email: 'field is required',
    });
  } else {
    return getUsers().then((item) => {
      if (!!/[^A-Za-z]+/g.test(values.firstName)) {
        throw new SubmissionError({
          firstName: 'first name must be string',
        });
      }
      if (!!/[^A-Za-z]+/g.test(values.lastName)) {
        throw new SubmissionError({
          lastName: 'first name must be string',
        });
      }
      if (item.email === values.email) {
        throw new SubmissionError({
          email: 'email already exist',
        });
      }
    });
    return Promise.resolve();
  }
};
