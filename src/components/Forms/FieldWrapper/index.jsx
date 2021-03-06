import React from 'react';
import PropsTypes from 'prop-types';
// components
import {
  InputForm,
  Input,
  Label,
  RequiredField,
  SpanError,
} from 'components/Forms/Account/styled';

const FieldWrapper = ({
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
        className={touched && error && 'field-error'}
        value={input.value}
        type={type}
      />
      {touched && error && <SpanError>{error}</SpanError>}
    </div>
  </InputForm>
);

FieldWrapper.propTypes = {
  input: PropsTypes.object.isRequired,
  isRequired: PropsTypes.bool,
  name: PropsTypes.string,
  meta: PropsTypes.shape({
    touched: PropsTypes.bool,
    error: PropsTypes.string,
  }).isRequired,
};

export default FieldWrapper;
