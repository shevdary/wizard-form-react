/*eslint-disable*/
import React from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { loadSavedInfo } from 'redux/user/reducers';
// styled
import { Alert, LinkAlert, Text } from './styled';

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
