/*eslint-disable*/
import React, { useState } from 'react';
import {
  InputForm,
  Inputs,
  Label,
  RequiredField,
  SpanError,
} from '../components/AccountForm/styled';

export const renderField = ({
  label,
  input,
  type,
  isRequired,
  onClick,
  meta: { touched, error },
}) => {
  const data = JSON.parse(localStorage.getItem('filledFields'));
  let unsavedValues;

  if (data) {
    Object.entries(data).map((item) => {
      if (item[0] === input.name) unsavedValues = item[1];
    });
  }
  const [valueField, setValue] = useState(unsavedValues);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <InputForm>
      <Label>
        {label} {isRequired && <RequiredField>*</RequiredField>}
      </Label>
      <div>
        <Inputs
          {...input}
          value={valueField}
          placeholder={label}
          onChange={onChange}
          type={type}
          onClick={onClick}
        />
        {touched && error && <SpanError>{error}</SpanError>}
      </div>
    </InputForm>
  );
};
