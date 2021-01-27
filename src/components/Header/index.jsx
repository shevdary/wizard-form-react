/*eslint-disable*/
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Alert, LinkAlert, Text } from './styled';
import { saveInfo, savePage } from '../../utils/localStorage';
import { useSelector } from 'react-redux';

export const Header = (props) => {
  const path = useHistory().location.pathname;
  const store = useSelector((state) => state);

  const handleUnload = () => {

   /* saveInfo(values);*/

    savePage(path);
  };

  useEffect(() => {
    window.addEventListener('beforeunload', handleUnload);

    return () => window.removeEventListener('beforeunload', handleUnload);
  }, [handleUnload]);

  return (
    <Alert>
      <Text>You have an unsaved user data. Do you want to complete it?</Text>
      <LinkAlert to={localStorage.getItem('currentPath')}>Continue</LinkAlert>
    </Alert>
  );
};
