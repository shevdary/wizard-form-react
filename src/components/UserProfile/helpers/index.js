import React from 'react';
import moment from 'moment';

export const replacePassword = (password) => password.replace(/[\s\S]/g, '*');
export const dateChangeFormat = (date) => moment(date).format('DD.MM.YYYY');
export const arrayOfObjects = (values) => values.map(({ label }) => label);
export const arrayOfValues = (values) => values.map((item) => <p>{item}</p>);
