/*eslint-disable*/
import React, { useState } from 'react';
import { Field } from 'redux-form';
import { Label } from '../AccountForm/styled';

export const RadioSelected = ({ component, name, options }) => {
  const [selectGender, setSelectGender] = useState('female');
  const onChange = (event) => {
    setSelectGender(event.target.value);
  };
  return (
    <>
      {options.map((nameItem) => (
        <Label>
          <Field
            name={name}
            component={component}
            type="radio"
            value={nameItem}
            onChange={onChange}
          />
          {nameItem}
        </Label>
      ))}
    </>
  );
};
