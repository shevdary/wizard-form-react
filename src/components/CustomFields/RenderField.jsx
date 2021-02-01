/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import {
  InputForm,
  Inputs,
  Label,
  RequiredField,
  SpanError,
} from 'components/AccountForm/styled';
import { useSelector } from 'react-redux';
import { userSelector } from 'redux/user/selector';

export const RenderField = ({
  label,
  input,
  type,
  value,
  isRequired,
  onClick,
  meta: { touched, error },
}) => {
  const user = useSelector(userSelector);
  const [valueFields, setValueFields] = useState(value);

  useEffect(() => {
    if (Object.keys(user).includes(input.name)) {
      setValueFields(Object.assign(user)[input.name]);
    }
  }, []);

  const onChange = (e) => {
    setValueFields(e.target.value);
  };

  return (
    <InputForm>
      <Label>
        {label}
        {isRequired && <RequiredField>*</RequiredField>}
      </Label>
      <div>
        <Inputs
          {...input}
          value={valueFields}
          placeholder={label}
          type={type ? type : 'text'}
          onChange={onChange}
          onClick={onClick}
        />
        {touched && error && <SpanError>{error}</SpanError>}
      </div>
    </InputForm>
  );
};
