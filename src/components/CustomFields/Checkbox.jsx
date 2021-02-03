import React from 'react';
import { Field } from 'redux-form';
// styled
import { InputForm, Label } from 'components/AccountForm/styled';
import { Ckeckmark, RadioLabel } from './CustomFiledsStyled';

export const Checkbox = ({ input, values }) => (
  <InputForm>
    {values.map(({ value, label }) => (
      <Label key={value}>
        <RadioLabel type="ckeckbox">
          <Field
            {...input}
            type="checkbox"
            name={value}
            component="input"
            value={input.value}
            onChange={input.onChange}
            onBlur={() => input.onBlur(input.value)}
          />
          <Ckeckmark checkbox />
          {label}
        </RadioLabel>
      </Label>
    ))}
  </InputForm>
);
