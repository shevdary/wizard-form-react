import React from 'react';
// styled
import { InputForm, Label } from 'components/AccountForm/styled';
import { HiddenCheckbox, StyledCheckbox } from './CustomFiledsStyled';

export const Checkbox = ({ input, values }) => (
  <InputForm>
    {values.map(({ value, label, isChecked }) => (
      <Label key={value}>
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
