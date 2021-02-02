import React from 'react';
// styled
import { InputForm, Label, SpanError } from 'components/AccountForm/styled';
import { InputMaskStyled } from '../ContactForm/styled';

export const renderNumber = ({
  input,
  type,
  name,
  meta: { touched, error },
}) => (
  <InputForm>
    <Label>{`Phone #${input.name[input.name.length - 1]}`}</Label>
    <InputMaskStyled
      {...input}
      name={name}
      mask="+38 (099) 999-99-99"
      placeholder="+38 (099) 999-99-99"
      type={type}
    />
    {touched && error && <SpanError>{error}</SpanError>}
  </InputForm>
);
