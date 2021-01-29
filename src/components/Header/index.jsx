/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { loadFromStorage, loadSavedInfo, update } from 'redux/user/reducers';
// styled
import { Alert, ButtonTransparent, LinkAlert, Text } from './styled';
// utils
import { getItem, getPathUnmount, removeItem } from 'utils/localStorage';

export const Header = () => {
  const [isShowAlert, setIsShowAlert] = useState(false);
  const [redirect, setRedirect] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (redirect) {
      history.push(`/create-user/${redirect}`);
    }
    getItem() ? setIsShowAlert(true) : setIsShowAlert(false);
  }, [isShowAlert]);

  const handleContinue = (e) => {
    e.preventDefault();
    dispatch(update(JSON.parse(getItem())));
    setRedirect(getPathUnmount());
    removeItem();
    setIsShowAlert(false);
  };
  const handleClose = (e) => {
    e.preventDefault();
    removeItem();
    setIsShowAlert(false);
  };
  return (
    <Alert className={isShowAlert ? 'visible' : 'hidden'}>
      <Text>You have an unsaved user data. Do you want to complete it?</Text>
      <LinkAlert onClick={handleContinue}>Continue</LinkAlert>
      <ButtonTransparent onClick={handleClose}>X</ButtonTransparent>
    </Alert>
  );
};
