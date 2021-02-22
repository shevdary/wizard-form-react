import React, { useEffect } from 'react';
// store
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
// store
import { userSelector } from 'store/user/selector';
import { getUserById, removeUser } from 'store/user/actions';
import { updateUserToDB } from 'store/db';
// components
import Tabs from 'components/Tabs';
import BackButton from 'components/BackButton';
// pages
import RouteTab from 'navigation/Tab';
// styled
import { TitleWrapper } from 'components/UserProfile/styled';
import { Main, Title } from './styled';

const EditUser = () => {
  const user = useSelector(userSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const { id } = useParams();

  const returnToUserProfile = () => {
    dispatch(removeUser());
    history.push(`/user/${user.id}`);
  };

  const updateUserInDb = (values) => {
    dispatch(updateUserToDB(values));
    history.push(`/user/${user.id}`);
  };

  const goBack = (previousTab) => {
    history.push(`${url}/${previousTab}`);
  };

  useEffect(() => {
    dispatch(getUserById(id));
  }, [id, dispatch]);

  return (
    <section className="edit-page">
      <Main>
        <TitleWrapper>
          <BackButton
            onClick={returnToUserProfile}
            text="User Profile"
            positionTop="45%"
          />

          <Title>Editing</Title>
        </TitleWrapper>
        <Tabs />
        <RouteTab
          onSubmit={updateUserInDb}
          goBack={goBack}
          addValuesToDB={updateUserInDb}
        />
      </Main>
    </section>
  );
};

export default EditUser;
