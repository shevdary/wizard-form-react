import moment from 'moment';

export const encodePassword = (password) => password.replace(/[\s\S]/g, '*');
export const dateChangeFormat = (date) => moment(date).format('DD.MM.YYYY');
export const arrayOfValues = (values) => values.map(({ label }) => label);
