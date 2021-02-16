import React from 'react';
import PropsTypes from 'prop-types';
// styled
import TableRow from './components/TableRow';

const UsersTable = ({ users, handleDelete, handleEdit }) =>
  users.map((user, index) => (
    <TableRow
      user={user}
      count={index}
      key={user.username}
      handleDelete={() => handleDelete(user.id)}
      handleEdit={() => handleEdit(user.id)}
    />
  ));

UsersTable.propTypes = {
  users: PropsTypes.array.isRequired,
  handleDelete: PropsTypes.func.isRequired,
  handleEdit: PropsTypes.func.isRequired,
};

export default UsersTable;
