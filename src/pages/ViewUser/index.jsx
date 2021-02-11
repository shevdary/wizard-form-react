/*eslint-disable*/
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, removeUserValue, userSelector } from 'redux/user';
import { loaderSelector } from 'redux/loader';
// assets
import previous from 'assets/icon/previous.svg';
// components
import Loader from 'components/Loader';
import UserProfile from 'components/UserProfile';
import NotFound from 'pages/NotFoundPage';
// styled
import {
  PageTitle,
  PreviousPage,
  UserListContainer,
} from 'components/UserProfile/styled';
import { TextCenter } from 'pages/CreateUser/styled';

const UserView = () => {
  const user = useSelector(userSelector);
  const { isLoading } = useSelector(loaderSelector);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id.replace(/\:/g, '')));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  const returnToUserList = () => {
    dispatch(removeUserValue());
    history.push('/user-list');
  };

  if (!user.id && !isLoading) {
    return <NotFound title="User is not found" />;
  }

  return (
    <UserListContainer>
      <PageTitle>
        <PreviousPage onClick={returnToUserList}>
          <img src={previous} alt="previous" />
          Users List
        </PreviousPage>
        <TextCenter>User Name</TextCenter>
      </PageTitle>
      <Loader>
        {Object.keys(user).length !== 0 && <UserProfile user={user} />}
      </Loader>
    </UserListContainer>
  );
};

export default UserView;
