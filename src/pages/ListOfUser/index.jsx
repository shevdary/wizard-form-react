import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// store
import * as List from 'store/users';
import { deleteUserFromDB } from 'store/db';
import { generateUsers } from 'store/users';
// components
import UserTable from 'components/UsersTable';
import TableHeader from 'components/UsersTable/components/TableHeader';
import Loader from 'components/Loader';
import EmptyUserList from 'components/UsersTable/components/EmptyUserList';
import Pagination from 'components/Pagination';
// styled
import { Main, SectionTable, Title } from './styled';

const ITEM_ON_PAGE = 5;

const ListOfUser = () => {
  const data = useSelector(List.usersSelector);
  const { dataCount } = useSelector(List.usersMetaSelector);
  const [currentPage, setCurrentPage] = useState(1);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (key) => {
    dispatch(deleteUserFromDB(key));
  };

  const handleEdit = (i) => {
    history.push(`/user/${i}`);
  };

  const handleGenerateUsers = () => {
    dispatch(generateUsers(50));
  };

  useEffect(() => {
    dispatch(List.getUserListFromDB(currentPage, ITEM_ON_PAGE));
  }, [currentPage, dispatch]);

  return (
    <Main>
      <Loader>
        <div>
          <Title>List of user</Title>
        </div>
        <SectionTable>
          <TableHeader />
          {data &&
            (data.length ? (
              <UserTable
                className="children"
                users={data}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ) : (
              <EmptyUserList handleGenerateUsers={handleGenerateUsers} />
            ))}
        </SectionTable>
      </Loader>
      <div className="d-flex flex-row py-4 align-items-center">
        <Pagination
          data={data}
          totalItems={dataCount}
          itemOnPage={ITEM_ON_PAGE}
          pageRange={5}
          handleChangePage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Main>
  );
};

export default ListOfUser;
