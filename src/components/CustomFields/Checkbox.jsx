/*eslint-disable*/
import React from 'react';
// styled
import { InputForm, Label } from '../AccountForm/styled';
import { HiddenCheckbox, StyledCheckbox } from './CustomFiledsStyled';

export const Checkbox = ({ input, values }) => {
  return (
    <InputForm>
      {values.map(({ value, label, isChecked }, id) => (
        <Label key={id}>
          <HiddenCheckbox
            {...input}
            type="checkbox"
            name={values}
            component="input"
            checked={isChecked}
          />
          <StyledCheckbox checked={isChecked} />
          {label}
        </Label>
      ))}
    </InputForm>
  );
};
