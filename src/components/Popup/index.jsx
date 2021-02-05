import React from 'react';
// styled
import { Alert, ButtonTransparent, Text } from './styled';

const Popup = ({ isShowPopup, handleClose, handleContinue, text }) => (
  <Alert className={isShowPopup ? 'visible' : 'hidden'}>
    <Text>{text}</Text>
    <ButtonTransparent onClick={handleContinue}>Continue</ButtonTransparent>
    <ButtonTransparent onClick={handleClose}>X</ButtonTransparent>
  </Alert>
);
export default Popup;
