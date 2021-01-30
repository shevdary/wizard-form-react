import React, { useState } from 'react';
import { Field } from 'redux-form';
import { Label } from 'components/AccountForm/styled';

export const RadioButton = ({ input, name, options, type, checked }) => {
  const [checkedRadio, setCheckedRadio] = useState(checked);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setCheckedRadio(value);
  };

  return (
    <>
      {options.map((nameItem) => (
        <Label>
          <Field
            {...input}
            type={type}
            name={name}
            component="input"
            value={nameItem}
            onChange={onChange}
            checked={checkedRadio === nameItem}
          />
          {nameItem}
        </Label>
      ))}
    </>
  );
};
