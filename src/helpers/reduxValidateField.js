import React from 'react';
import DatePicker from 'react-datepicker';
import {
  InputForm,
  Inputs,
  Label,
  SpanError,
} from '../components/AccountForm/AccountFormStyled';

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error },
}) => (
  <InputForm>
    <Label>{label}</Label>
    <div>
      <Inputs {...input} placeholder={label} type={type} />
      {touched && error && <SpanError>{error}</SpanError>}
    </div>
  </InputForm>
);

export const renderDatePicker = (props) => {
  const {
    input,
    className,
    inline,
    open,
    onChange,
    meta: { touched, error },
  } = props;

  return (
    <div>
      <DatePicker
        {...input}
        open={open}
        selected={input.value}
        type="date"
        inline={inline}
        className={className}
        name="birthday"
        dateFormat="dd/MM/yyyy"
        onChange={onChange}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};
