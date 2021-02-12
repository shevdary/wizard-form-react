import React from 'react';
import PropsTypes from 'prop-types';
// styled
import TableRow from './TableRow';

const UserTable = ({ userList, handleDelete, handleEdit }) =>
  userList.map((user, index) => (
    <TableRow
      user={user}
      count={index}
      key={user.username}
      handleDelete={() => handleDelete(user.id)}
      handleEdit={() => handleEdit(user.id)}
    />
  ));

UserTable.propTypes = {
  userList: PropsTypes.array.isRequired,
  handleDelete: PropsTypes.func.isRequired,
  handleEdit: PropsTypes.func.isRequired,
};

export default UserTable;
