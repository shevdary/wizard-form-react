import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// redux
import { userSelector } from 'redux/user/selector';
import { loadUserFromLocalStorage } from 'redux/user/actions';
// components
import Tabs from 'pages/Tabs';
import Popup from 'components/Popup';
// utils
import {
  getTabFromLocalStorage,
  getUserFromLocalStorage,
  removeAllFromLocalStorage,
} from 'utils/localStorage';
import { TABS_NAME } from 'utils/optionsValue';
// navigation
import RouteTab from 'pages/navigation/Tab';
import { TabSwitch } from 'pages/Tabs/styled';
// styled
import { Main, TextCenter } from './styled';

const CreateUser = () => {
  const user = useSelector(userSelector);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(user).length === 0 && getUserFromLocalStorage()) {
      setIsShowPopup(true);
    }
  }, [user]);

  const handleClose = () => {
    setIsShowPopup(false);
    removeAllFromLocalStorage();
  };

  const handleContinue = () => {
    const redirectTabIndex = TABS_NAME.indexOf(getTabFromLocalStorage());
    dispatch(loadUserFromLocalStorage());
    history.push(`/create-user/${TABS_NAME[redirectTabIndex + 1]}`);
    handleClose();
  };

  return (
    <div className="main-account">
      <Main>
        <TextCenter>Adding new user</TextCenter>
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

export default CreateUser;
