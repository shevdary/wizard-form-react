import React from 'react';
import PropTypes from 'prop-types';
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
  input: PropTypes.object.isRequired,
  isRequired: PropTypes.bool,
  name: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }).isRequired,
};

export default FieldWrapper;
