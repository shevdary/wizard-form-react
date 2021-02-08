import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// redux
import { useDispatch } from 'react-redux';
import { resetUserValue } from 'redux/user/actions';
// image
import addUser from 'assets/icon/user.svg';
import logo from 'assets/icon/logotype.svg';
import userList from 'assets/icon/userList.svg';
// styled
import { HeaderButtonWrapper } from 'components/CustomFields/styled';
import { HeaderButton, Logo, NavItem, NavPanel } from './styled';

export const NavBar = () => {
  const location = useLocation().pathname;
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectToUsers = () => {
    history.push('/user-list');
  };

  const redirectToCreateUser = () => {
    dispatch(resetUserValue());
    history.push('/create-user');
  };

  return (
    <NavPanel className="nav-panel">
      <NavItem>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <HeaderButtonWrapper>
          <HeaderButton
            active={location.includes('/create-user')}
            onClick={redirectToCreateUser}
          >
            <img src={addUser} alt="create user" />
            Add new user
          </HeaderButton>
          <HeaderButton
            active={location.includes('/user-list')}
            onClick={redirectToUsers}
          >
            <img src={userList} alt="user list" />
            List of user
          </HeaderButton>
        </HeaderButtonWrapper>
      </NavItem>
    </NavPanel>
  );
};
