export const validate = (values) => {
  const errors = {};
  if (!values) {
    errors.company = 'field is required';
    errors.language = 'field is required';
  }

  if (values) {
    if (values.phones) {
      const phonesArrayErrors = [];
      values.phones.forEach((item, itemIndex, array) => {
        if (
          Object.keys(item).length !== 0 &&
          item.replace(/[\s\-\+\(\)\_]/g, '').length < 12
        ) {
          phonesArrayErrors[itemIndex] = 'Phone isn`t correct';
        }
        array.filter((value, index) => {
          if (array.indexOf(value) !== index) {
            phonesArrayErrors[index] = 'Phone numbers must not match';
          }
        });
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

    if (values.github && !/\b(https:\/\/github.com)\//.test(values.github)) {
      errors.github = 'Github link is`t correct';
    }

    if (
      values.facebook &&
      !/\b(https|http):\/\/www.facebook.com\//g.test(values.facebook)
    ) {
      errors.facebook = 'Facebook link is`t correct';
    }

    if (values.fax && values.fax.replace(/[\s\-\+\(\)\_]/g, '').length < 12) {
      errors.fax = 'Fax  is`t correct';
    }
  }

  return errors;
};
