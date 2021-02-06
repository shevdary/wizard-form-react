import React from 'react';
// styled
import { Label } from 'components/Forms/Account/styled';
import { Ckeckmark, RadioLabel } from 'components/CustomFields/styled';
import PropsTypes from 'prop-types';

const Checkbox = ({ options, input }) => {
  const onChange = (e, option) => {
    const newValue = [...input.value];
    if (e.target.checked) {
      newValue.push(option);
    } else {
      newValue.splice(
        newValue.filter((item) => item.value === option.value),
        1
      );
    }

    return input.onChange(newValue);
  };

  return options.map((option, index) => (
    <Label className="checkbox" key={index}>
      <RadioLabel type="checkbox">
        <input
          type="checkbox"
          name={`${input.value}[${index}]`}
          value={input.value.value}
          checked={
            input.value.value &&
            input.value.filter((item) => item.value === option.value)
          }
          onChange={(e) => onChange(e, option)}
        />
        <Ckeckmark checkbox />
        {option.label}
      </RadioLabel>
    </Label>
  ));
};

Checkbox.propTypes = {
  options: PropsTypes.arrayOf(
    PropsTypes.shape({
      value: PropsTypes.string.isRequired,
      label: PropsTypes.string.isRequired,
    })
  ).isRequired,
  input: PropsTypes.object.isRequired,
};

export default Checkbox;
