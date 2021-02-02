import React from 'react';
// styled
import { InputForm, Label, SpanError } from 'components/AccountForm/styled';
import DatePicker from 'react-datepicker';

export const DataPicker = ({ input, label, meta: { error } }) => (
  <InputForm>
    <Label>{label}</Label>
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={input.value || null}
      onChange={input.onChange}
      showYearDropdown
      disabledKeyboardNavigation
      placeholderText="DD/MM/YYYY"
    />
    {error && <SpanError>{error}</SpanError>}
  </InputForm>
);
