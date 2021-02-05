import React from 'react';
// styled
import { Label } from 'components/Forms/Account/styled';
import { Ckeckmark, RadioLabel } from 'components/CustomFields/styled';

const Checkbox = ({ options, input }) => {
  const onChange = (e, option) => {
    const newValue = [...input.value];
    if (e.target.checked) {
      newValue.push(option.label);
    } else {
      newValue.splice(newValue.indexOf(option.label), 1);
    }

    return input.onChange(newValue);
  };

  return options.map((option, index) => (
    <Label className="checkbox" key={index}>
      <RadioLabel type="checkbox">
        <input
          type="checkbox"
          name={`${input.value}[${index}]`}
          value={option.value}
          checked={input.value.indexOf(option.label) !== -1}
          onChange={(e) => onChange(e, option)}
        />
        <Ckeckmark checkbox />
        {option.label}
      </RadioLabel>
    </Label>
  ));
};
export default Checkbox;
