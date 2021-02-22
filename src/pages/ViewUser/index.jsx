import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// store
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, removeUser, userSelector } from 'store/user';
// components
import Loader from 'components/Loader';
import UserProfile from 'components/UserProfile';
import BackButton from 'components/BackButton';
// styled
import { TitleWrapper, Main, Title } from 'components/UserProfile/styled';

import UserNotFound from '../UserNotFound';

const UserView = () => {
  const user = useSelector(userSelector);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const returnToUserList = () => {
    dispatch(removeUser());
    history.push('/user-list');
  };

  useEffect(() => {
    dispatch(getUserById(id));
  }, [id, dispatch]);

  return (
    <Main>
      <TitleWrapper>
        <BackButton onClick={returnToUserList} text="Users List" />
        <Title>User Name</Title>
      </TitleWrapper>
      <Loader>
        {user.id ? <UserProfile user={user} /> : <UserNotFound />}
      </Loader>
    </Main>
  );
};

export default UserView;
