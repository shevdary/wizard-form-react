import React from 'react';
import { Field } from 'redux-form';
// styled
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from 'components/AccountForm/styled';
import { Ckeckmark, RadioLabel } from './CustomFiledsStyled';
import { InlineBlock } from './styled';

export const RadioButton = ({
  input,
  label,
  options,
  meta: { touched, error },
}) => (
  <InputForm>
    <Label classname="label-small">
      {label}
      <RequiredField>*</RequiredField>
    </Label>
    <InlineBlock>
      {options.map((option) => (
        <RadioLabel ckecked={input.value === option.value}>
          <Field
            {...input}
            type="radio"
            name={input.name}
            component="input"
            value={option.value}
          />
          <Ckeckmark />
          {option.label}
        </RadioLabel>
      ))}
    </InlineBlock>
    {touched && error && <SpanError>{error}</SpanError>}
  </InputForm>
);
