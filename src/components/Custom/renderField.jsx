/*eslint-disable*/
import React, { useState } from 'react';
import {
  InputForm,
  Inputs,
  Label,
  RequiredField,
  SpanError,
} from '../AccountForm/styled';

export const renderField = ({
  label,
  input,
  type,
  isRequired,
  onClick,
  meta: { touched, error },
}) => {
  return (
    <InputForm>
      <Label>
        {label} {isRequired && <RequiredField>*</RequiredField>}
      </Label>
      <div>
        <Inputs {...input} placeholder={label} type={type} onClick={onClick} />
        {touched && error && <SpanError>{error}</SpanError>}
      </div>
    </InputForm>
  );
};
