import React from 'react';
// utils
import en from 'date-fns/locale/en-US';
// assets
import calendar from 'assets/icon/calendar.svg';
// styled
import { registerLocale } from 'react-datepicker';
import { Label, SpanError } from 'components/Forms/Account/styled';
import {
  CalendarImg,
  DatePickerStyled,
  DatePickerWrapper,
} from 'components/CustomFields/styled';

registerLocale('en', { ...en, options: { ...en.options, weekStartsOn: 1 } });

const DataPicker = ({ input, label, meta: { touched, error } }) => (
  <>
    <DatePickerWrapper>
      <CalendarImg src={calendar} alt="calendar" />
      <Label>{label}</Label>
      <DatePickerStyled
        isError={touched && error}
        dateFormat="dd/MM/yyyy"
        selected={input.value || null}
        onChange={input.onChange}
        disabledKeyboardNavigation
        placeholderText="DD/MM/YYYY"
        scrollableYearDropdown
        showMonthDropdown
        showYearDropdown
        yearDropdownItemNumber={50}
        locale="en"
      />
    </DatePickerWrapper>
    {touched && error && <SpanError>{error}</SpanError>}
  </>
);

export default DataPicker;
