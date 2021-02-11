import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, removeUserValue, userSelector } from 'redux/user';
// assets
import previous from 'assets/icon/previous.svg';
// Field
import Loader from 'components/Loader';
import UserProfile from 'components/UserProfile';
// styled
import {
  PageTitle,
  PreviousPage,
  UserListContainer,
} from 'components/UserProfile/styled';
import { TextCenter } from 'pages/CreateUser/styled';
import NotFound from '../notFoundPage';

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

  if (!user.id) {
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
