import React from 'react';
// utils
import en from 'date-fns/locale/en-US';
// assets
import calendar from 'assets/icon/calendar.svg';
// styled
import { registerLocale } from 'react-datepicker';
import { Label, SpanError } from 'components/AccountForm/styled';
import { CalendarImg, DatePickerStyled, DatePickerWrapper } from './styled';

registerLocale('en', { ...en, options: { ...en.options, weekStartsOn: 1 } });

export const DataPicker = ({ input, label, meta: { error } }) => (
  <>
    <DatePickerWrapper>
      <CalendarImg src={calendar} alt="calendar" />
      <Label>{label}</Label>
      <DatePickerStyled
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
    {error && <SpanError>{error}</SpanError>}
  </>
);
