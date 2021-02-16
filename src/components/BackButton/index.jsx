import React from 'react';
import PropsTypes from 'prop-types';
// assets
import previous from 'assets/icon/previous.svg';
// components
import { PreviousPage } from 'components/UserProfile/styled';

const BackButton = ({ onClick, text, ...props }) => (
  <PreviousPage onClick={onClick} {...props}>
    <img src={previous} alt="previous" />
    {text}
  </PreviousPage>
);

BackButton.propTypes = {
  text: PropsTypes.string.isRequired,
  onClick: PropsTypes.func,
};

export default BackButton;
