/*eslint-disable*/
import React from 'react';
import { SpanError } from '../AccountForm/styled';
import InputMask from 'react-input-mask';

export const renderNumber = ({
  input,
  type,
  name,
  meta: { touched, error },
}) => {
  return (
    <>
      <InputMask
        {...input}
        name={name}
        mask="+38 (099) 999-99-99"
        placeholder="+38 (099) 999-99-99"
        type={type}
      />
      {touched && error && <SpanError>{error}</SpanError>}
    </>
  );
};
