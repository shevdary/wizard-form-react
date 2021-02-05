import React from 'react';
// components
import {
  InputForm,
  Input,
  Label,
  RequiredField,
  SpanError,
} from 'components/Forms/Account/styled';

const RenderField = ({
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
      <Input
        {...input}
        error={touched && error}
        value={input.value}
        placeholder={label}
        type={type || 'text'}
        onClick={onClick}
      />
      {touched && error && <SpanError>{error}</SpanError>}
    </div>
  </InputForm>
);
export default RenderField;
