import React from 'react';
// styled
import { UserListWrapper } from './styled';
import TableRow from './TableRow';

const UserTable = ({ userList, handleDelete, handleEdit }) => (
  <UserListWrapper className="user-wrapper">
    {userList.map((user) => (
      <TableRow
        user={user}
        key={user.username}
        handleDelete={() => handleDelete(user.id)}
        handleEdit={() => handleEdit(user.id)}
      />
    ))}
  </UserListWrapper>
);

export default UserTable;
