import moment from 'moment';

export const replacePassword = (password) => password.replace(/[\s\S]/g, '*');
export const dateChangeFormat = (date) => moment(date).format('DD.MM.YYYY');
export const arrayOfValuesByComma = (values) =>
  values
    .map((item) => item)
    .map((item) => item.label)
    .join(', ');

export const arrayOfValues = (values) => values.map(({ label }) => label);
