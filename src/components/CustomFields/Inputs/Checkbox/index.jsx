import React from 'react';
import { Field } from 'redux-form';
// styled
import { Label } from 'components/Forms/Account/styled';
import { Ckeckmark, RadioLabel } from 'components/CustomFields/styled';

const Checkbox = ({ options, fields, name }) =>
  options.map(({ value, label }) => (
    <Label key={value}>
      <RadioLabel type="checkbox">
        <Field
          type="checkbox"
          name={`${name}[${value}]`}
          component="input"
          value={value}
          onChange={() => fields.push({ value, label })}
        />
        <Ckeckmark checkbox />
        {label}
      </RadioLabel>
    </Label>
  ));

export default Checkbox;
