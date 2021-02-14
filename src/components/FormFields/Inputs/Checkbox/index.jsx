import React from 'react';
import PropTypes from 'prop-types';
// styled
import { Label } from 'components/Forms/Account/styled';
import { Ckeckmark, RadioLabel } from 'components/FormFields/styled';

const Checkbox = ({ input, options }) => {
  const { name, onChange } = input;

  const handleChange = (event, label) => {
    const arr = [...input.value];
    if (event.target.checked) {
      arr.push(label);
    } else {
      arr.splice(arr.indexOf(label), 1);
    }
    return onChange(arr);
  };

  return options.map(({ label, value }, index) => (
    <Label className="checkbox" key={index}>
      <RadioLabel key={`checkbox-${index}`}>
        <input
          type="checkbox"
          name={`${name}[${value}]`}
          value={label}
          checked={input.value.includes(label)}
          onChange={(e) => handleChange(e, label)}
        />
        <Ckeckmark checkbox />
        {label}
      </RadioLabel>
    </Label>
  ));
};

Checkbox.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Checkbox;
