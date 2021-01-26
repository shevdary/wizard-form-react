/*eslint-disable*/
import React from 'react';
import Tabs from '../Tabs/Tabs';
import { Main, TextCenter } from './CreateUserStyled';

const User = () => {
  return (
    <div className="main-account">
      <Main>
        <TextCenter>Adding new user</TextCenter>
        <Tabs />
      </Main>
    </div>
  );
};
export default User;
