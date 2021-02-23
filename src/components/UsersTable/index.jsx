import React from 'react';
import PropTypes from 'prop-types';
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
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default UsersTable;
