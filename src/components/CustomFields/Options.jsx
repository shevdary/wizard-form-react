import React from 'react';
// styled
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from 'components/AccountForm/styled';
import { Selects } from 'components/ContactForm/styled';
import { ReactSelect } from './styled';

export const SelectedFields = (props) => {
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
          styles={ReactSelect}
          className="border"
          {...input}
          {...props}
          isError={touched && error}
          value={input.value}
          onChange={input.onChange}
          onBlur={() => input.onBlur(input.value)}
        />
        {touched && error && <SpanError>{error}</SpanError>}
      </div>
    </InputForm>
  );
};
