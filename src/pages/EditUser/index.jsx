import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
// redux
import { userSelector } from 'redux/user/selector';
import { removeUserValue } from 'redux/user/actions';
import { updateUserToDB } from 'redux/db';
// components
import Tabs from 'pages/Tabs';
// pages
import { TabSwitch } from 'pages/Tabs/styled';

import RouteTab from 'navigation/Tab';
// assets
import previous from 'assets/icon/previous.svg';
// styled
import { PageTitle, PreviousPage } from 'components/UserProfile/styled';
import { Main, TextCenter } from './styled';

const EditUser = () => {
  const user = useSelector(userSelector);
  const history = useHistory();
  const dispatch = useDispatch();
  const match = useRouteMatch().url;

  const returnToUserProfile = () => {
    dispatch(removeUserValue());
    history.push(`/user/${user.id}`);
  };

  const updateUserInDb = (values) => {
    dispatch(updateUserToDB(values));
    history.push(`/user/${user.id}`);
  };

  const goBack = (previousTab) => {
    history.push(`${match}/${previousTab}`);
  };

  return (
    <div className="edit-page">
      <Main>
        <PageTitle>
          <PreviousPage onClick={returnToUserProfile} positionTop="45%">
            <img src={previous} alt="previous" />
            User Profile
          </PreviousPage>
          <TextCenter>Editing</TextCenter>
        </PageTitle>
        <Tabs />
        <TabSwitch className="tab-switch">
          <RouteTab
            onSubmit={updateUserInDb}
            goBack={goBack}
            addValuesToDB={updateUserInDb}
          />
        </TabSwitch>
      </Main>
    </div>
  );
};

export default EditUser;
