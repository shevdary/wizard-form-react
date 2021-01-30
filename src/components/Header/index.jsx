/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { update } from 'redux/user/reducers';
// styled
import { Alert, ButtonTransparent, LinkAlert, Text } from './styled';
// utils

export const Popup = ({ isShowAlert, handleClose, handleContinue, text }) => {
  return (
    <Alert className={isShowAlert ? 'visible' : 'hidden'}>
      <Text>{text}</Text>
      <LinkAlert to="/" onClick={handleContinue}>
        Continue
      </LinkAlert>
      <ButtonTransparent onClick={handleClose}>X</ButtonTransparent>
    </Alert>
  );
};
