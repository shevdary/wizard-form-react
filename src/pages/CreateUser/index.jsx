import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// redux
import { update } from 'redux/user/actions';
import { userSelector } from 'redux/user/selector';
// components
import Tabs from 'components/Tabs';
import { Popup } from 'components/Popup';
// utils
import {
  getTabFromLocalStorage,
  getUserFromLocalStorage,
  removeAllFromLocalStorage,
} from 'utils/localStorage';
import { TABS_NAME } from 'utils/optionsValue';
// styled
import { Main, TextCenter } from './CreateUserStyled';

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

  const handleClose = (e) => {
    e.preventDefault();
    setIsShowPopup(false);
    removeAllFromLocalStorage();
  };

  const handleContinue = (e) => {
    e.preventDefault();
    const redirectTabIndex = TABS_NAME.indexOf(getTabFromLocalStorage());
    dispatch(update(getUserFromLocalStorage()));
    history.push(`/create-user/${TABS_NAME[redirectTabIndex + 1]}`);
    handleClose(e);
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
      </Main>
    </div>
  );
};

export default CreateUser;
