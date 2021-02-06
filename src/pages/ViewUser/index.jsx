import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, removeUserValue, userSelector } from 'redux/user';
// assets
import previous from 'assets/icon/previous.svg';
// Field
import UserContainer from 'pages/UserInfo';
import Loader from 'components/Loader';
// styled
import {
  PageTitle,
  PreviousPage,
  UserListContainer,
} from 'pages/UserInfo/styled';
import { TextCenter } from 'pages/CreateUser/styled';

const UserView = () => {
  const user = useSelector(userSelector);
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
        {Object.keys(user).length !== 0 && <UserContainer user={user} />}
      </Loader>
    </UserListContainer>
  );
};

export default UserView;
