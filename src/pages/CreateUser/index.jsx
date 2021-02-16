/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// store
import { userSelector } from 'store/user/selector';
import {
  clearUserFromLocalStorage,
  loadUserFromLocalStorage,
  updateUser,
} from 'store/user/actions';
import { setCurrentTab, tabsSelector } from 'store/tabs';
import { addValueToDB } from 'store/db';
// components
import Tabs from 'components/Tabs';
import Popup from 'components/Popup';
// utils
import {
  getTabFromLocalStorage,
  getUserFromLocalStorage,
} from 'utils/localStorage';
// navigation
import RouteTab from 'navigation/Tab';
import { TabSwitch } from 'components/Tabs/styled';
// styled
import { Main, TextCenter } from './styled';

const TABS_NAME = [
  { value: 'account' },
  { value: 'profile' },
  { value: 'contact' },
  { value: 'capabilities' },
];

const CreateUser = () => {
  const user = useSelector(userSelector);
  const passedTabs = useSelector(tabsSelector);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const { pathname } = history.location;

  const handleClose = () => {
    setIsShowPopup(false);
    history.push('/create-user/account');
    dispatch(clearUserFromLocalStorage());
  };

  const handleContinue = () => {
    dispatch(loadUserFromLocalStorage(history));
    setIsShowPopup(false);
  };

  const onSubmit = (values, nextTab) => {
    dispatch(updateUser(values));
    dispatch(setCurrentTab(nextTab));
    history.push(`/create-user/${nextTab}`);
  };

  const addUserToDB = (values) => {
    dispatch(updateUser(values));
    dispatch(addValueToDB());
    history.push('/user-list');
  };

  const goBack = (previousTab) => {
    history.push(`/create-user/${previousTab}`);
  };

  useEffect(() => {
    if (!user.username && getUserFromLocalStorage()) {
      setIsShowPopup(true);
    }
    if (
      !user.username &&
      (pathname.includes('profile') ||
        pathname.includes('contact') ||
        pathname.includes('capabilities'))
    ) {
      history.push('/create-user/account');
    }
  }, [user, history, pathname]);

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
          <RouteTab
            onSubmit={onSubmit}
            goBack={goBack}
            addValuesToDB={addUserToDB}
          />
        </TabSwitch>
      </Main>
    </div>
  );
};

export default CreateUser;
