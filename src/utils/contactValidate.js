/*eslint-disable*/
export const validate = (values) => {
  const errors = {};
  if (!values) {
    errors.company = 'field is required';
    errors.language = 'field is required';
  }
  if (values) {
    if (values.phones) {
      const phonesArrayErrors = [];
      values.phones.forEach((item, itemIndex) => {
        if (
          Object.keys(item).length !== 0 &&
          item.replace(/[\s\-\+\(\)\_]/g, '').length < 12
        ) {
          phonesArrayErrors[itemIndex] = 'Phone isn`t correct';
        }
      });
      if (phonesArrayErrors.length) {
        errors.phones = phonesArrayErrors;
      }
    }
    if (!values.company) {
      errors.company = 'field is required';
    }
    if (!values.language) {
      errors.language = 'field is required';
    }
    if (
      values.github &&
      !/\b(https:\/\/github.com)\/*[\-A-Za-z0-9+&@#\/%=~_|]/.test(values.github)
    ) {
      errors.github = 'Github link is`t correct';
    }
    if (
      values.facebook &&
      !/\b(https|http):\/\/www.facebook.com*[\-A-Za-z0-9+&@#\/%=~_|]/g.test(
        values.facebook
      )
    ) {
      errors.facebook = 'Facebook link is`t correct';
    }
  }

  return errors;
};
