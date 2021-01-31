/*eslint-disable*/

import { SubmissionError } from 'redux-form';

export const validate = (values) => {
  const errors = {};
  /*  console.log(values)
  if (!values) {
    throw new SubmissionError({
      company: 'field is required',
      language: 'field is required',
    });
  }*/
  if (!values.company) {
    throw new SubmissionError({
      company: 'That username is already exist',
    });
  }

  return errors;
};
