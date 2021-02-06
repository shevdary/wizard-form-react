import React from 'react';
import PropsTypes from 'prop-types';
// styled
import { CustomButton } from './styled';

const Button = ({ onClick, type, label, name }) => (
  <CustomButton type={type} onClick={onClick} name={name}>
    {label}
  </CustomButton>
);

Button.propTypes = {
  type: PropsTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  label: PropsTypes.string.isRequired,
  name: PropsTypes.string.isRequired,
  onClick: PropsTypes.func,
};

export default Button;
