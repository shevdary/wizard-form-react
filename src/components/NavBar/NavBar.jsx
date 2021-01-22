/* eslint-disable */
import React from 'react';
import {
  Logo,
  NavItem,
  NavPanel,
  OpacityButton,
  TranslucentButton,
} from './NavBarStyled';
import { addUserIcon, logo, userListIcon } from '../SvgIcon/icon';

const NavBar = () => {
  return (
    <NavPanel className="nav-panel">
      <NavItem>
        <Logo>{logo} Remake</Logo>
        <OpacityButton>{addUserIcon} Add new user</OpacityButton>
        <TranslucentButton>{userListIcon} List of user</TranslucentButton>
      </NavItem>
    </NavPanel>
  );
};

export default NavBar;
