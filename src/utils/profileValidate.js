/* eslint-disable*/
import { userFormSelectors } from 'indexedDB/database';
import moment from 'moment';
import { SubmissionError } from 'redux-form';

export const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'field is required';
  } else if (!!/[^A-Za-z]+/g.test(values.firstName)) {
    errors.firstName = 'field isn`t correct';
  }

  if (!values.lastName) {
    errors.lastName = 'field is required';
  } else if (!!/[^A-Za-z]+/g.test(values.lastName)) {
    errors.lastName = 'field isn`t correct';
  }

  if (!values.email) {
    errors.email = 'field is required';
  } else if (!/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/.test(values.email)) {
    errors.email = 'field isn`t correct';
  }

  if (values.birthday) {
    const eighteenYearsAgo = moment().subtract(18, 'years');
    const birthday = moment(values.birthday);

    if (!birthday.isValid()) {
      errors.birthday = 'invalid date';
    } else if (!eighteenYearsAgo.isAfter(birthday)) {
      errors.birthday = `you have to be at least 18 years old.`;
    }
  }
  return errors;
};

export const asyncValidate = (values) =>
  userFormSelectors().then((res) => {
    if (values.email) {
      res.map((item) => {
        if (item.email === values.email) {
          throw new SubmissionError({
            email: 'That username is already exist',
          });
        }
      });
    }
  });
