/*eslint-disable*/

export const validate = (values) => {
  const errors = {};
  if (!values.company) {
    errors.company = 'field is required';
  }

  return errors;
};
