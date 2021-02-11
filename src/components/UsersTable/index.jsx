import React from 'react';
// styled
import TableRow from './TableRow';

const UserTable = ({ userList, handleDelete, handleEdit }) =>
  userList.map((user) => (
    <TableRow
      user={user}
      key={user.username}
      handleDelete={() => handleDelete(user.id)}
      handleEdit={() => handleEdit(user.id)}
    />
  ));

export default UserTable;
