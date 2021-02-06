import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// redux
import { userSelector } from 'redux/user/selector';
import { loadUserFromLocalStorage, removeUserValue } from 'redux/user/actions';
// components
import Tabs from 'pages/Tabs';
import Popup from 'components/Popup';
// pages
import { PageTitle, PreviousPage } from 'pages/UserInfo/styled';
// assets
import previous from 'assets/icon/previous.svg';
// utils
import {
  getTabFromLocalStorage,
  removeAllFromLocalStorage,
} from 'utils/localStorage';
import { TABS_NAME } from 'utils/optionsValue';
// navigation
import RouteTab from 'navigation/Tab';
import { TabSwitch } from 'pages/Tabs/styled';
// styled
import { Main, TextCenter } from './styled';

const EditUser = () => {
  const user = useSelector(userSelector);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsShowPopup(false);
    removeAllFromLocalStorage();
  };

  const handleContinue = () => {
    const redirectTabIndex = TABS_NAME.indexOf(getTabFromLocalStorage());
    dispatch(loadUserFromLocalStorage());
    history.push(`/edit-user/${TABS_NAME[redirectTabIndex + 1]}`);
    handleClose();
  };

  const returnToUserProfile = () => {
    dispatch(removeUserValue());
    history.push(`/user-list/:${user.id}`);
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
        <Popup
          text="You have an unsaved user data. Do you want to complete it?"
          isShowPopup={isShowPopup}
          handleClose={handleClose}
          handleContinue={handleContinue}
        />
        <Tabs />
        <TabSwitch className="tab-switch">
          <RouteTab />
        </TabSwitch>
      </Main>
    </div>
  );
};

export default EditUser;
