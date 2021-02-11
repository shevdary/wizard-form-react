import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
// components
import TableHeader from 'components/UsersTable/TableHeader';
import Loader from 'components/Loader';
// pages
import EmptyUserList from 'pages/UserEmptyList';
// utils
import { deleteUserFromDB } from 'redux/db/index';
import * as List from 'redux/userList';
// styled
import { TableWrapper, UserListWrapper } from './styled';
import TableRow from './TableRow';

const UserTable = () => {
  const userList = useSelector(List.userListSelector);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(List.getUserListFromDB());
  }, [dispatch]);

  const handleDelete = (key) => {
    dispatch(deleteUserFromDB(key));
  };

  const handleEdit = (i) => {
    history.push(`/user/${i}`);
  };

  return (
    <UserListWrapper className="user-wrapper">
      <Loader>
        <TableWrapper>
          <TableHeader />

          {userList[0] &&
            userList.map((user) => (
              <TableRow
                user={user}
                key={user.username}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          {!userList[0] && <EmptyUserList />}
        </TableWrapper>
      </Loader>
    </UserListWrapper>
  );
};

export default UserTable;
