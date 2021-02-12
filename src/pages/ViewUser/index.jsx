import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, removeUserValue, userSelector } from 'redux/user';
// assets
import previous from 'assets/icon/previous.svg';
// components
import Loader from 'components/Loader';
import UserProfile from 'components/UserProfile';
// styled
import {
  TitleWrapper,
  PreviousPage,
  Body,
  Title,
} from 'components/UserProfile/styled';

const UserView = () => {
  const user = useSelector(userSelector);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(id));
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [id]);

  const returnToUserList = () => {
    dispatch(removeUserValue());
    history.push('/user-list');
  };

  return (
    <Body>
      <TitleWrapper>
        <PreviousPage onClick={returnToUserList}>
          <img src={previous} alt="previous" />
          Users List
        </PreviousPage>
        <Title>User Name</Title>
      </TitleWrapper>
      <Loader>{!!user.id && <UserProfile user={user} />}</Loader>
    </Body>
  );
};

export default UserView;
