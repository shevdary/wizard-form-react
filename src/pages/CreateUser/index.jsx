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
import { setCurrentTab } from 'store/tabs';
import { addValueToDB } from 'store/db';
// components
import Tabs from 'components/Tabs';
import Popup from 'components/Popup';
// utils
import { getUserFromLocalStorage } from 'utils/localStorage';
// navigation
import RouteTab from 'navigation/Tab';
import { TabSwitch } from 'components/Tabs/styled';
// styled
import { Main, TextCenter } from './styled';

const CreateUser = () => {
  const user = useSelector(userSelector);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsShowPopup(false);
    history.push('/create-user/account');
    dispatch(clearUserFromLocalStorage());
  };

  const handleContinue = () => {
    dispatch(loadUserFromLocalStorage(history));
    setIsShowPopup(false);
  };

  const handleSubmit = (values, nextTab) => {
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
    if (!user.username && !user.avatar && getUserFromLocalStorage()) {
      setIsShowPopup(true);
    }
  }, [user]);

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
            onSubmit={handleSubmit}
            goBack={goBack}
            addValuesToDB={addUserToDB}
          />
        </TabSwitch>
      </Main>
    </div>
  );
};

export default CreateUser;
