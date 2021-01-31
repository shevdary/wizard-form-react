import React from 'react';
import Select from 'react-select';
// styled
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from 'components/AccountForm/styled';

export const SelectedFields = (props) => {
  const {
    input,
    meta: { touched, error },
    label,
    isRequired,
  } = props;

  return (
    <InputForm>
      <Label>
        {label}
        {isRequired && <RequiredField>*</RequiredField>}
      </Label>
      <div>
        <Select
          {...input}
          {...props}
          value={input.value}
          onChange={input.onChange}
          onBlur={() => input.onBlur(input.value)}
        />
        {touched && error && <SpanError>{error}</SpanError>}
      </div>
    </InputForm>
  );
};
