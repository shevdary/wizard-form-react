import React from 'react';
import Select from 'react-select';
// styled
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from '../AccountForm/styled';

export const SelectedFields = ({
  input,
  meta: { touched, error },
  name,
  type,
  value,
  label,
  options,
  isRequired,
}) => (
  <InputForm>
    <Label>
      {label}
      {isRequired && <RequiredField>*</RequiredField>}
    </Label>
    <div>
      <Select
        {...input}
        type={type}
        name={name}
        value={value}
        onChange={input.onChange}
        placeholder={label}
        options={options}
      />
      {touched && error && <SpanError>{error}</SpanError>}
    </div>
  </InputForm>
);
