import React from 'react';
import Select from 'react-select';
// styled
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from 'components/AccountForm/styled';

export const SelectedFields = ({
  input,
  meta: { touched, error },
  name,
  type,
  value,
  label,
  options,
  isRequired,
  isMulti,
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
        isRequired
        isMulti={isMulti}
      />
      {touched && error && <SpanError>{error}</SpanError>}
    </div>
  </InputForm>
);
