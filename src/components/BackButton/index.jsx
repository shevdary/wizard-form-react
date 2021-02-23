import React from 'react';
import PropTypes from 'prop-types';
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
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default BackButton;
