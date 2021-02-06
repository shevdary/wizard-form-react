import React from 'react';
// components
import UserTable from 'components/UsersTable';
// pages
import { Main, TextCenter } from 'pages/CreateUser/styled';

const ListOfUser = () => (
  <div>
    <Main>
      <TextCenter>List of user</TextCenter>
      <UserTable />
    </Main>
  </div>
);

export default ListOfUser;
