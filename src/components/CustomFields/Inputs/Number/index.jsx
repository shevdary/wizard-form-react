import React from 'react';
// styled
import { InputForm, Label, SpanError } from 'components/Forms/Account/styled';
import { InputMaskStyled } from 'components/Forms/Contact/styled';
import PropsTypes from 'prop-types';

const RenderNumber = ({ input, label, meta: { touched, error } }) => (
  <InputForm>
    <Label>{label}</Label>
    <InputMaskStyled
      {...input}
      borderError={touched && error ? 'true' : null}
      mask="+38 (099) 999-99-99"
      placeholder="+38 (099) 999-99-99"
    />
    {touched && error && <SpanError>{error}</SpanError>}
  </InputForm>
);

RenderNumber.propTypes = {
  input: PropsTypes.object.isRequired,
  label: PropsTypes.string,
  meta: PropsTypes.shape({
    touched: PropsTypes.bool,
    error: PropsTypes.string,
  }).isRequired,
};

export default RenderNumber;
