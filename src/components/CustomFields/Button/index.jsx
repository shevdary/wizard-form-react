import React from 'react';
import PropsTypes from 'prop-types';
// styled
import { CustomButton } from './styled';

const Button = ({ onClick, type, label, name }) => (
  <CustomButton type={type} onClick={onClick} name={name}>
    {label}
  </CustomButton>
);
export default Button;

Button.propTypes = {
  type: PropsTypes.string.isRequired,
  label: PropsTypes.string.isRequired,
};
