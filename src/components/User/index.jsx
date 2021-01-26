/*eslint-disable*/
import React from 'react';
import Index from '../Tabs';
import { Main, TextCenter } from './CreateUserStyled';

const User = () => {
  return (
    <div className="main-account">
      <Main>
        <TextCenter>Adding new user</TextCenter>
        <Index />
      </Main>
    </div>
  );
};
export default User;
