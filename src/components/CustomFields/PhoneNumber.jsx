import React from 'react';
import InputMask from 'react-input-mask';
// styled
import { SpanError } from 'components/AccountForm/styled';

export const renderNumber = ({
  input,
  type,
  name,
  meta: { touched, error },
}) => (
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
