/*eslint-disable*/
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, useRouteMatch } from 'react-router-dom';
// redux
import { userSelector } from 'redux/user/selector';
import { getUserById, removeUserValue } from 'redux/user/actions';
import { updateUserToDB } from 'redux/db';
// components
import Tabs from 'components/Tabs';
// pages
import { TabSwitch } from 'components/Tabs/styled';
import RouteTab from 'navigation/Tab';
// assets
import previous from 'assets/icon/previous.svg';
// styled
import { TitleWrapper, PreviousPage } from 'components/UserProfile/styled';
import { Main, Title } from './styled';
import NotFound from '../NotFoundPage';
import Loader from '../../components/Loader';

const EditUser = () => {
  const user = useSelector(userSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const { url } = useRouteMatch();
  const { id } = useParams();

  const returnToUserProfile = () => {
    dispatch(removeUserValue());
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
          <PreviousPage onClick={returnToUserProfile} positionTop="45%">
            <img src={previous} alt="previous" />
            User Profile
          </PreviousPage>
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
