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
    isRequired,
  } = props;

  return (
    <InputForm>
      <Label>
        {label}
        {isRequired && <RequiredField>*</RequiredField>}
      </Label>
      <div>
        <Selects
          styles={ReactSelect}
          id="style-1"
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
