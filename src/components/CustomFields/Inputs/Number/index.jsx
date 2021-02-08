import React from 'react';
// styled
import { InputForm, Label, SpanError } from 'components/Forms/Account/styled';
import { InputMaskStyled } from 'components/Forms/Contact/styled';

const RenderNumber = ({
  input,
  label,
  type,
  name,
  meta: { touched, error },
}) => (
  <InputForm>
    <Label>{label}</Label>
    <InputMaskStyled
      {...input}
      name={name}
      borderError={touched && error ? 'true' : null}
      mask="+38 (099) 999-99-99"
      placeholder="+38 (099) 999-99-99"
      type={type}
    />
    {touched && error && <SpanError>{error}</SpanError>}
  </InputForm>
);

export default RenderNumber;
