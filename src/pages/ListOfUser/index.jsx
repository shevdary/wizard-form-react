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
  const [currentPage, setCurrentPage] = useState(1);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (key) => {
    dispatch(deleteUserFromDB(key));
  };

  const handleEdit = (i) => {
    history.push(`/user/${i}`);
  };

  const onPageChanges = (data) => {
    const { itemOnPage, currentPage } = data;
    const offset = (currentPage - 1) * itemOnPage;

    setCurrentPage(currentPage);
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
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalRecords={users.length}
            itemOnPage={5}
            pagesRange={3}
            onPageChanged={onPageChanges}
          />
        )}
      </div>
    </Body>
  );
};

export default ListOfUser;
