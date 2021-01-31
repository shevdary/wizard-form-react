import React from 'react';
// styled
import { InputForm, Label } from 'components/AccountForm/styled';
import { HiddenCheckbox, StyledCheckbox } from './CustomFiledsStyled';

export const Checkbox = ({ input, name, values }) => {
  console.log(values);
  return (
    <InputForm>
      {values.map(({ value, label, isChecked }) => (
        <Label key={value}>
          <HiddenCheckbox
            {...input}
            type="checkbox"
            name={name}
            value={input.value}
            onChange={input.onChange}
            onBlur={() => input.onBlur(input.value)}
          />
          <StyledCheckbox checked={isChecked} />
          {value}
          {label}
        </Label>
      ))}
    </InputForm>
  );
};
