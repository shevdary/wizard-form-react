export const validate = (values) => {
  const errors = {};
  if (!values) {
    errors.skills = 'field is required';
  }
  if (values.skills && values.skills.length < 3) {
    errors.skills = 'you have to choice min 3 skills';
  }
  if (values.info && values.info.length > 300) {
    errors.info = 'maximum 300 character ';
  }
  return errors;
};
