import React from 'react';
import Tabs from '../Tabs';
import { Main, TextCenter } from './CreateUserStyled';

const User = () => (
  <div className="main-account">
    <Main>
      <TextCenter>Adding new user</TextCenter>
      <Tabs />
    </Main>
  </div>
);

export default User;
