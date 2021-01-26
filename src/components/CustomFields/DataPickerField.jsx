import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { renderDatePicker } from '../../utils/reduxValidateField';

export const DataPickerInput = ({ name, dateFormat }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker
        name={name}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat={dateFormat}
        placeholderText="DD/MM/YYYY"
        showYearDropdown
        component={renderDatePicker}
      />
    </div>
  );
};
