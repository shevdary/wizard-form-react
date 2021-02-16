import React from 'react';
import PropsTypes from 'prop-types';
// utils
import en from 'date-fns/locale/en-US';
import calendar from 'assets/icon/calendar.svg';
import moment, { now } from 'moment';
// styled
import { registerLocale } from 'react-datepicker';
import { SpanError } from 'components/Forms/Account/styled';
import {
  CalendarImg,
  DatePickerStyled,
  DatePickerWrapper,
} from 'components/Forms/FieldWrapper/styled';

registerLocale('en', { ...en, options: { ...en.options, weekStartsOn: 1 } });

const DataPicker = ({ input, meta: { touched, error } }) => (
  <>
    <DatePickerWrapper>
      <CalendarImg src={calendar} alt="calendar" />
      <DatePickerStyled
        isError={touched && error}
        dateFormat="dd/MM/yyyy"
        selected={moment(input.value || now()).toDate()}
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

DataPicker.propTypes = {
  input: PropsTypes.object.isRequired,
  meta: PropsTypes.shape({
    touched: PropsTypes.bool,
    error: PropsTypes.string,
  }).isRequired,
};

export default DataPicker;
