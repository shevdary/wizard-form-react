/* eslint-disable*/
import { getUsers } from '../indexedDB/database';
import moment from 'moment';

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
  getUsers().then((res) => {
    res.map((item) => {
      if (item.email === values.email) {
        throw { email: 'That email is taken' };
      }
    });
  });
