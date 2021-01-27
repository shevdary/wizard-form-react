/*eslint-disable*/
import React, { useState } from 'react';
import Select from 'react-select';
import {
  InputForm,
  Inputs,
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
}) => {
  return (
    <InputForm>
      <Label>
        {label} {isRequired && <RequiredField>*</RequiredField>}
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
};
