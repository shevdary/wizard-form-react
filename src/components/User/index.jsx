/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// components
import Tabs from 'components/Tabs';
// styled
import { Main, TextCenter } from './CreateUserStyled';
import { Header } from '../Header';

const User = () => {
  return (
    <div className="main-account">
      <Main>
        <TextCenter>Adding new user</TextCenter>
        <Header />
        <Tabs />
      </Main>
    </div>
  );
};

export default User;
