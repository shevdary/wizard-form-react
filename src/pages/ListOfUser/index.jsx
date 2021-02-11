import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// redux
import * as List from 'redux/userList';
import { deleteUserFromDB } from 'redux/db';
// components
import UserTable from 'components/UsersTable';
import EmptyUserList from 'components/UsersTable/EmptyTable';
import TableHeader from 'components/UsersTable/TableHeader';
import Loader from 'components/Loader';
import { UserListWrapper } from 'components/UsersTable/styled';
// pages
import { Main, TextCenter } from 'pages/CreateUser/styled';

const ListOfUser = () => {
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
    <div>
      <Loader>
        <Main>
          <TextCenter>List of user</TextCenter>
          <TableHeader />
          <UserListWrapper className="user-wrapper">
            {userList[0] ? (
              <UserTable
                className="children"
                userList={userList}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ) : (
              <EmptyUserList />
            )}
          </UserListWrapper>
        </Main>
      </Loader>
    </div>
  );
};

export default ListOfUser;
