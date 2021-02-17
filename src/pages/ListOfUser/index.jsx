/*eslint-disable*/
import React, { useEffect, useState } from 'react';
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
// styled
import { Body, SectionTable, Title } from './styled';
import Pagination from 'components/Pagination';

const ListOfUser = () => {
  const users = useSelector(List.usersSelector);
  const [currentUsers, setCurrentUsers] = useState([]);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (key) => {
    dispatch(deleteUserFromDB(key));
  };

  const handleEdit = (i) => {
    history.push(`/user/${i}`);
  };

  const onChangedPage = (data) => {
    const { itemOnPage, currentPage } = data;
    const offset = (currentPage - 1) * itemOnPage;
    setCurrentUsers(users.slice(offset, offset + itemOnPage));
  };

  useEffect(() => {
    dispatch(List.getUserListFromDB());
  }, [dispatch]);

  return (
    <Body>
      <Loader>
        <Title>List of user</Title>
        <SectionTable>
          <TableHeader />
          {users &&
            (users.length ? (
              <UserTable
                className="children"
                users={currentUsers}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ) : (
              <EmptyUserList />
            ))}
        </SectionTable>
      </Loader>

      <div className="d-flex flex-row py-4 align-items-center">
        {users && (
          <Pagination
            totalItems={users.length}
            itemOnPage={5}
            pagesNeighborhood={2}
            onChangedPage={onChangedPage}
          />
        )}
      </div>
    </Body>
  );
};

export default ListOfUser;
