import React from 'react';
import NavBar from '../NavBar/NavBar';
import Tabs from '../CreateUserTabs/Tabs';
import { Main, TextCenter } from './CreateUserStyled';

const CreateUser = () => (
  <div className="main-account">
    <NavBar />
    <Main>
      <TextCenter>Adding new user</TextCenter>
      <Tabs />
    </Main>
  </div>
);

export default CreateUser;
