import React from 'react';
import { Field } from 'redux-form';
// styled
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from 'components/Forms/Account/styled';
import {
  Ckeckmark,
  RadioLabel,
  InlineBlock,
} from 'components/CustomFields/styled';

const RadioButton = ({ input, label, options, meta: { touched, error } }) => (
  <InputForm>
    <Label classname="label-small">
      {label}
      <RequiredField>*</RequiredField>
    </Label>
    <InlineBlock>
      {options.map((option) => (
        <RadioLabel
          ckecked={input.value === option.value}
          key={new Date().getTime() + Math.random()}
        >
          <Field
            {...input}
            key={new Date().getTime() + Math.random()}
            type="radio"
            name={input.name}
            component="input"
            value={option.value}
          />
          <Ckeckmark key={new Date().getTime() + Math.random()} />
          {option.label}
        </RadioLabel>
      ))}
    </InlineBlock>
    {touched && error && <SpanError>{error}</SpanError>}
  </InputForm>
);

export default RadioButton;
