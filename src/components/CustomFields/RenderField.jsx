import React from 'react';
// components
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
  name,
  meta: { touched, error },
}) => (
  <InputForm>
    <Label htmlFor={name}>
      {label}
      {isRequired && <RequiredField>*</RequiredField>}
    </Label>
    <div>
      <Inputs
        {...input}
        value={input.value}
        placeholder={label}
        type={type || 'text'}
        onClick={onClick}
      />
      {touched && error && <SpanError>{error}</SpanError>}
    </div>
  </InputForm>
);
