/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// store
import * as List from 'store/users';
import { deleteUserFromDB } from 'store/db';
// components
import UserTable from 'components/UsersTable';
import TableHeader from 'components/UsersTable/components/TableHeader';
import Loader from 'components/Loader';
import EmptyUserList from 'components/UsersTable/components/EmptyUserList';
import Pagination from 'components/Pagination';
// styled
import { Main, SectionTable, Title } from './styled';

const ListOfUser = () => {
  const users = useSelector(List.usersSelector);
  const { dataCount } = useSelector(List.usersMetaSelector);
  const [currentPage, setCurrentPage] = useState(1);

  const history = useHistory();
  const dispatch = useDispatch();

  const itemsOnPage = 5;

  const handleDelete = (key) => {
    dispatch(deleteUserFromDB(key));
  };

  const handleEdit = (i) => {
    history.push(`/user/${i}`);
  };

  useEffect(() => {
    dispatch(List.getUserListFromDB(currentPage, itemsOnPage));
  }, [currentPage, itemsOnPage, dispatch]);

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
        </SectionTable>
      </Loader>
      <div className="d-flex flex-row py-4 align-items-center">
        <Pagination
          totalItems={dataCount}
          itemOnPage={5}
          pageRange={5}
          handleChangePage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Main>
  );
};

export default ListOfUser;
