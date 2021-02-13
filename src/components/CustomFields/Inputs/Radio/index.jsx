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
import PropsTypes from 'prop-types';

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
          key={option.value}
          right="75px"
        >
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

RadioButton.propTypes = {
  options: PropsTypes.arrayOf(
    PropsTypes.shape({
      value: PropsTypes.string.isRequired,
      label: PropsTypes.string.isRequired,
    })
  ).isRequired,
  label: PropsTypes.string.isRequired,
  input: PropsTypes.object.isRequired,
};

export default RadioButton;
