import React from 'react';
import PropsTypes from 'prop-types';
// styled
import { Alert, ButtonTransparent, Text } from './styled';

const Popup = ({ isShowPopup, handleClose, handleContinue, text }) => (
  <Alert className={isShowPopup ? 'visible' : 'hidden'}>
    <Text>{text}</Text>
    <ButtonTransparent onClick={handleContinue}>Continue</ButtonTransparent>
    <ButtonTransparent onClick={handleClose}>X</ButtonTransparent>
  </Alert>
);

Popup.propTypes = {
  isShowPopup: PropsTypes.bool.isRequired,
  handleClose: PropsTypes.func.isRequired,
  handleContinue: PropsTypes.func.isRequired,
  text: PropsTypes.string.isRequired,
};

export default Popup;
