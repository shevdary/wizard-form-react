import React from 'react';
// styled
import { CustomButton } from './styled';

const Button = ({ onClick, type, label, name }) => (
  <CustomButton type={type} onClick={onClick} name={name}>
    {label}
  </CustomButton>
);
export default Button;
