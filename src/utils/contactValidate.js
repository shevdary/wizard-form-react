export const validate = (values) => {
  const errors = {};
  if (!values) {
    errors.company = 'field is required';
    errors.language = 'field is required';
  }
  if (values) {
    if (!values.company) {
      errors.company = 'field is required';
    }
    if (!values.language) {
      errors.language = 'field is required';
    }
  }

  return errors;
};
