import React from 'react';
// image
import addUser from 'assets/icon/user.svg';
import logo from 'assets/icon/logotype.svg';
import userList from 'assets/icon/userList.svg';
// styled
import {
  Logo,
  NavItem,
  NavPanel,
  OpacityButton,
  TranslucentButton,
} from './styled';

export const NavBar = () => (
  <NavPanel className="nav-panel">
    <NavItem>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
      <OpacityButton>
        <img src={addUser} alt="" />
        Add new user
      </OpacityButton>
      <TranslucentButton>
        <img src={userList} alt="" />
        List of user
      </TranslucentButton>
    </NavItem>
  </NavPanel>
);
