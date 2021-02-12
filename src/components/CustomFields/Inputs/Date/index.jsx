import React from 'react';
// utils
import en from 'date-fns/locale/en-US';
import moment from 'moment';
import calendar from 'assets/icon/calendar.svg';
// styled
import { registerLocale } from 'react-datepicker';
import { SpanError } from 'components/Forms/Account/styled';
import {
  CalendarImg,
  DatePickerStyled,
  DatePickerWrapper,
} from 'components/CustomFields/styled';
import PropsTypes from 'prop-types';

registerLocale('en', { ...en, options: { ...en.options, weekStartsOn: 1 } });

const DataPicker = ({ input, meta: { touched, error } }) => {
  const onChange = (value) => input.onChange(moment(value).toDate());

  return (
    <>
      <DatePickerWrapper>
        <CalendarImg src={calendar} alt="calendar" />
        <DatePickerStyled
          isError={touched && error}
          dateFormat="dd/MM/yyyy"
          selected={input.value || null}
          onChange={onChange}
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
};

DataPicker.propTypes = {
  input: PropsTypes.object.isRequired,
  meta: PropsTypes.shape({
    touched: PropsTypes.bool,
    error: PropsTypes.string,
  }).isRequired,
};

export default DataPicker;
