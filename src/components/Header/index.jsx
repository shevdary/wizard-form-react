/*eslint-disable*/
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert, LinkAlert, Text } from './styled';
import { useDispatch } from 'react-redux';
import { loadSavedInfo } from '../../redux/user/reducers';

export const Header = () => {
  const path = useHistory();
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(loadSavedInfo());
    path.push(localStorage.getItem('currentPath'));
  };

  return (
    <Alert>
      <Text>You have an unsaved user data. Do you want to complete it?</Text>
      <LinkAlert onClick={onClick}>Continue</LinkAlert>
    </Alert>
  );
};
