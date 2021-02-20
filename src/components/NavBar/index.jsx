import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// store
import { useDispatch } from 'react-redux';
import { removeUser } from 'store/user';
// image
import addUser from 'assets/icon/user.svg';
import logo from 'assets/icon/logotype.svg';
import users from 'assets/icon/userList.svg';
// styled
import { HeaderUl, Logo, ContentCenter, Header, HeaderLi } from './styled';
import { findUsersByUsername } from '../../store/users';

export const NavBar = () => {
  const location = useLocation().pathname;
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectToUsers = () => {
    dispatch(removeUser());
    history.push('/user-list');
  };

  const redirectToCreateUser = () => {
    dispatch(removeUser());
    history.push('/create-user/account');
  };

  const onChange = (e) => {
    dispatch(findUsersByUsername(e.target.value));
  };

  return (
    <Header className="nav-panel">
      <ContentCenter>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <HeaderUl>
          <input type="text" onChange={onChange} name="username" />
          <HeaderLi
            active={location.includes('/create-user')}
            onClick={redirectToCreateUser}
          >
            <img src={addUser} alt="create user" />
            Add new user
          </HeaderLi>
          <HeaderLi
            active={
              location.includes('/user') || location.includes('/edit-user')
            }
            onClick={redirectToUsers}
          >
            <img src={users} alt="user list" />
            List of user
          </HeaderLi>
        </HeaderUl>
      </ContentCenter>
    </Header>
  );
};
