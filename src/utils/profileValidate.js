/* eslint-disable*/
import { getUsers } from '../indexedDB/database';
import moment from 'moment';
export const profileValidate = (values) => {
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
  } else {
    getUsers().then((user) => {
      if (user.email === values.email) {
        errors.email = 'email already exist';
      }
    });
  }

  if (!values.birthday) {
    errors.birthday = 'field is required';
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
