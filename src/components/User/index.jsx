import React from 'react';
// components
import Tabs from 'components/Tabs';
// styled
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
