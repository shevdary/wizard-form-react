import React from 'react';
import PropsTypes from 'prop-types';
// assets
import addNumberIcon from 'assets/icon/addButton.svg';
import removeNumberIcon from 'assets/icon/removeButton.svg';
// styled
import { ButtonForPhone } from './styled';

const Button = ({ count = 2, onClick, name, label }) => (
  <ButtonForPhone type="button" onClick={onClick} count={count}>
    {name === 'add' ? (
      <img src={addNumberIcon} alt="add" />
    ) : (
      <img src={removeNumberIcon} alt="remove" />
    )}
    {label}
  </ButtonForPhone>
);

Button.propTypes = {
  name: PropsTypes.string.isRequired,
  label: PropsTypes.string,
  onClick: PropsTypes.func,
  count: PropsTypes.number,
};

export default Button;
