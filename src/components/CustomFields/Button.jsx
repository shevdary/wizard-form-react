import React from 'react';
// styled
import { BackButton, ForwardButton } from '../AccountForm/styled';

const Button = ({ onClick, type, name, label }) => {
  if (type)
    return (
      <ForwardButton type={type} onClick={onClick} name={name}>
        {label}
      </ForwardButton>
    );

  return (
    <BackButton type={type} onClick={onClick} name={name}>
      {label}
    </BackButton>
  );
};

export default Button;
