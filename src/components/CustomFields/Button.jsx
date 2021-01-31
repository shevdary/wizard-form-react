import React from 'react';
// styled
import { CustomButton } from 'components/AccountForm/styled';

export  const Button = ({ onClick, type, label, name }) => (
  <CustomButton type={type} onClick={onClick} name={name}>
    {label}
  </CustomButton>
);

