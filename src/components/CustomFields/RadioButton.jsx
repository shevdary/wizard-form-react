import React from 'react';
import { Field } from 'redux-form';
// styled
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from 'components/AccountForm/styled';
import { RadioLabel } from './CustomFiledsStyled';

export const RadioButton = ({ input, options, meta: { touched, error } }) => (
  <InputForm>
    <Label>
      {input.name}
      <RequiredField>*</RequiredField>
    </Label>
    {options.map(({ value, label }) => (
      <RadioLabel>
        <Field
          {...input}
          type="radio"
          name={input.name}
          component="input"
          value={value}
        />
        {label}
      </RadioLabel>
    ))}

    {touched && error && <SpanError>{error}</SpanError>}
  </InputForm>
);
