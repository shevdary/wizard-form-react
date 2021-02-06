import React from 'react';
// components
import {
  InputForm,
  Input,
  Label,
  RequiredField,
  SpanError,
} from 'components/Forms/Account/styled';
import PropsTypes from 'prop-types';

const RenderField = ({
  input,
  type = 'text',
  isRequired,
  name,
  meta: { touched, error },
}) => (
  <InputForm>
    <Label htmlFor={name}>
      {isRequired && <RequiredField>*</RequiredField>}
    </Label>
    <div>
      <Input
        {...input}
        border={touched && error}
        value={input.value}
        type={type}
      />
      {touched && error && <SpanError>{error}</SpanError>}
    </div>
  </InputForm>
);

RenderField.propTypes = {
  input: PropsTypes.object.isRequired,
  isRequired: PropsTypes.bool,
  name: PropsTypes.string,
  meta: PropsTypes.shape({
    touched: PropsTypes.bool,
    error: PropsTypes.string,
  }).isRequired,
};

export default RenderField;
