import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// redux
import { userSelector } from 'redux/user/selector';
import { loadUserFromLocalStorage, updateUser } from 'redux/user/actions';
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
import RouteTab from 'navigation/Tab';
import { TabSwitch } from 'pages/Tabs/styled';
// styled
import { Main, TextCenter } from './styled';
import { setCurrentTab } from '../../redux/tabs';
import { addValueToDB } from '../../redux/db';

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
    history.push('/create-user/');
    removeAllFromLocalStorage();
  };

  const handleContinue = () => {
    const redirectTabIndex = TABS_NAME.indexOf(getTabFromLocalStorage());
    dispatch(loadUserFromLocalStorage());
    history.push(`/create-user/${TABS_NAME[redirectTabIndex + 1]}`);
    handleClose();
  };

  const onSubmit = (values, currentTab, nextTab) => {
    dispatch(updateUser(values));
    dispatch(setCurrentTab(currentTab));
    history.push(`/create-user/${nextTab}`);
  };

  const addUserToDB = (values, path) => {
    dispatch(updateUser(values));
    dispatch(addValueToDB());
    history.push(path);
  };

  const goBack = (previousTab) => {
    history.push(`/create-user/${previousTab}`);
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
