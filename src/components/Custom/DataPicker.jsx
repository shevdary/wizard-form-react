import React from 'react';
import DatePicker from 'react-datepicker';
// styled
import { InputForm, Label, SpanError } from 'components/AccountForm/styled';

export const DataPicker = ({ input, label, meta: { error } }) => (
  <InputForm>
    <Label>{label}</Label>
    <DatePicker
      {...input}
      type="date"
      className="plus-icon"
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
