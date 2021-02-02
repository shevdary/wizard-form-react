import React from 'react';
// styled
import { Alert, ButtonTransparent, LinkAlert, Text } from './styled';

export const Popup = ({ isShowPopup, handleClose, handleContinue, text }) => (
  <Alert className={isShowPopup ? 'visible' : 'hidden'}>
    <Text>{text}</Text>
    <LinkAlert to="/" onClick={handleContinue}>
      Continue
    </LinkAlert>
    <ButtonTransparent onClick={handleClose}>X</ButtonTransparent>
  </Alert>
);
