import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// store
import * as List from 'store/users';
import { useDispatch, useSelector } from 'react-redux';
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

const ListOfUser = () => {
  const data = useSelector(List.usersSelector);
  const { dataCount } = useSelector(List.usersMetaSelector);
  const [currentPage, setCurrentPage] = useState(1);
  const [userPerPage, setUserPerPage] = useState(5);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = (key) => {
    dispatch(deleteUserFromDB(key, currentPage));
    data.length === 1 && setCurrentPage(currentPage - 1);
  };

  const handleEdit = (i) => {
    history.push(`/user/${i}`);
  };

  const handleGenerateUsers = () => {
    dispatch(generateUsers(50));
  };

  useEffect(() => {
    if (data?.length < userPerPage) setUserPerPage(5);

    dispatch(List.getUserListFromDB(currentPage, userPerPage));
  }, [currentPage, dispatch, userPerPage, data?.length]);

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
          totalItems={dataCount}
          itemPerPage={userPerPage}
          pageRange={5}
          handleChangePage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </Main>
  );
};

export default ListOfUser;
