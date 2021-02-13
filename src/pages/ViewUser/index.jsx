import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, removeUserValue, userSelector } from 'redux/user';

// components
import Loader from 'components/Loader';
import UserProfile from 'components/UserProfile';
import BackButton from 'components/Button/BackButton';
// styled
import { TitleWrapper, Body, Title } from 'components/UserProfile/styled';

import UserNotFound from '../UserNotFound';

const UserView = () => {
  const user = useSelector(userSelector);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const returnToUserList = () => {
    dispatch(removeUserValue());
    history.push('/user-list');
  };

  useEffect(() => {
    dispatch(getUserById(id));
  }, [id, dispatch]);

  return (
    <Body>
      <TitleWrapper>
        <BackButton onClick={returnToUserList} text="Users List" />
        <Title>User Name</Title>
      </TitleWrapper>
      <Loader>
        {user.id ? <UserProfile user={user} /> : <UserNotFound />}
      </Loader>
    </Body>
  );
};

export default UserView;
