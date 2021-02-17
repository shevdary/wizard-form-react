import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// store
import * as List from 'store/users';
import { deleteUserFromDB } from 'store/db';
// components
import UserTable from 'components/UsersTable';
import EmptyUserList from 'components/UsersTable/components/EmptyUserList';
import TableHeader from 'components/UsersTable/components/TableHeader';
import Loader from 'components/Loader';
import GenerateUsers from 'components/GenerateUsers';
// styled
import { Main, SectionTable, Title } from './styled';

const ListOfUser = () => {
  const users = useSelector(List.usersSelector);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (key) => {
    dispatch(deleteUserFromDB(key));
  };

  const handleEdit = (i) => {
    history.push(`/user/${i}`);
  };

  useEffect(() => {
    dispatch(List.getUserListFromDB());
  }, [dispatch]);

  return (
    <Main>
      <Loader>
        <Title>List of user</Title>
        <SectionTable>
          <TableHeader />
          {users &&
            (users.length ? (
              <UserTable
                className="children"
                users={users}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ) : (
              <EmptyUserList />
            ))}
          <GenerateUsers itemCount={50} />
        </SectionTable>
      </Loader>
    </Main>
  );
};

export default ListOfUser;
