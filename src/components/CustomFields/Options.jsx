import React, { useState } from 'react';
import Select from 'react-select';
// styled
import {
  InputForm,
  Label,
  RequiredField,
  SpanError,
} from 'components/AccountForm/styled';
import { useDispatch } from 'react-redux';
import { update } from '../../redux/user/reducers';

export const SelectedFields = (props) => {
  const {
    input,
    meta: { touched, error },
    value,
    label,
    isRequired,
  } = props;

  const [newValue, setNewValue] = useState(value);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setNewValue(e);
  };

  const onBlur = () => {
    dispatch(update({ language: newValue.value }));
  };

  return (
    <InputForm>
      <Label>
        {label}
        {isRequired && <RequiredField>*</RequiredField>}
      </Label>
      <div>
        <Select
          {...input}
          {...props}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {touched && error && <SpanError>{error}</SpanError>}
      </div>
    </InputForm>
  );
};
