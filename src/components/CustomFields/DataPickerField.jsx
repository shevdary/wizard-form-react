/*eslint-disable*/
import React from 'react';
import DatePicker from 'react-datepicker';

// utils
// styled
import { InputForm, Label, SpanError } from '../AccountForm/styled';

export const DataPicker = ({ input, label, meta: { error } }) => {
  return (
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
};
