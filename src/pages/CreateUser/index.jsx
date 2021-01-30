/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// redux
import { update } from 'redux/user/reducers';
import { userSelector } from 'redux/user/selector';
// components
import Tabs from 'components/Tabs';
import { Popup } from 'components/Header';
// styled
import { Main, TextCenter } from './CreateUserStyled';
// utils
import { getItem, getPath, removeItem } from 'utils/localStorage';

const CreateUser = ({ title }) => {
  const user = useSelector(userSelector);
  const [isShowAlert, setIsShowAlert] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const tabsList = ['account', 'profile', 'contact', 'capabilities'];

  useEffect(() => {
    if (Object.keys(user).length === 0 && getItem()) {
      setIsShowAlert(true);
    }
  });

  const handleContinue = (e) => {
    e.preventDefault();
    const redirectTabIndex = tabsList.indexOf(getPath());
    dispatch(update(JSON.parse(getItem())));
    history.push(`/create-user/${tabsList[redirectTabIndex + 1]}`);
    handleClose(e);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setIsShowAlert(false);
    removeItem();
  };

  return (
    <div className="main-account">
      <Main>
        <TextCenter>{title || 'Adding new user'}</TextCenter>
        <Popup
          text="You have an unsaved user data. Do you want to complete it?"
          isShowAlert={isShowAlert}
          handleClose={handleClose}
          handleContinue={handleContinue}
        />
        <Tabs tabValue={tabsList} />
      </Main>
    </div>
  );
};

export default CreateUser;
