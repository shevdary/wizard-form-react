import React from 'react';
// components
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from 'components/Forms/Account/styled';

import { Textarea } from '../../styled';

const TextArea = ({
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
      <Textarea
        {...input}
        component="textarea"
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
export default TextArea;
