/*eslint-disable*/
import React from 'react';
import {
  InputForm,
  Inputs,
  Label,
  RequiredField,
  SpanError,
} from 'components/AccountForm/styled';

export const RenderField = ({
  label,
  input,
  type,
  isRequired,
  onClick,
  meta: { touched, error },
}) => (
  <InputForm>
    <Label>
      {label}
      {isRequired && <RequiredField>*</RequiredField>}
    </Label>
    <div>
      <Inputs
        {...input}
        value={input.value}
        placeholder={label}
        type={type ? type : 'text'}
        onClick={onClick}
      />
      {touched && error && <SpanError>{error}</SpanError>}
    </div>
  </InputForm>
);
