import React from 'react';
import PropsTypes from 'prop-types';
// styled
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from 'components/Forms/Account/styled';
import { Selects } from 'components/Forms/Contact/styled';
import { ReactSelect } from 'components/Forms/FieldWrapper/styled';

const SelectedFields = (props) => {
  const {
    input,
    meta: { touched, error },
    label,
    className,
    isRequired,
  } = props;

  return (
    <InputForm className={className}>
      <Label>
        {label}
        {isRequired && <RequiredField>*</RequiredField>}
      </Label>
      <div className="div">
        <Selects
          className="border"
          {...input}
          {...props}
          styles={ReactSelect}
          borderError={touched && error ? 'true' : null}
          value={input.value}
          onBlur={() => input.onBlur(input.value)}
        />
        {touched && error && <SpanError>{error}</SpanError>}
      </div>
    </InputForm>
  );
};

SelectedFields.propTypes = {
  component: PropsTypes.func,
  input: PropsTypes.object.isRequired,
  isRequired: PropsTypes.bool,
  name: PropsTypes.string,
  className: PropsTypes.string,
  meta: PropsTypes.shape({
    touched: PropsTypes.bool,
    error: PropsTypes.string,
  }).isRequired,
  label: PropsTypes.string.isRequired,
};

export default SelectedFields;
