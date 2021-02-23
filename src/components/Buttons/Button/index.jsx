import React from 'react';
import PropTypes from 'prop-types';
// styled
import { CustomButton } from './styled';

const Button = ({ onClick, type, label, name }) => (
  <CustomButton type={type} onClick={onClick} name={name}>
    {label}
  </CustomButton>
);

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'button', 'reset']).isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
