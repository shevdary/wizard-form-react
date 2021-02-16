import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// store
import { useDispatch } from 'react-redux';
import { removeUserValue } from 'store/user/actions';
// image
import addUser from 'assets/icon/user.svg';
import logo from 'assets/icon/logotype.svg';
import userList from 'assets/icon/userList.svg';
// styled
import { HeaderUl, Logo, ContentCenter, Header, HeaderLi } from './styled';

export const NavBar = () => {
  const location = useLocation().pathname;
  const history = useHistory();
  const dispatch = useDispatch();

  const redirectToUsers = () => {
    dispatch(removeUserValue());
    history.push('/user-list');
  };

  const redirectToCreateUser = () => {
    dispatch(removeUserValue());
    history.push('/create-user/account');
  };

  return (
    <Header className="nav-panel">
      <ContentCenter>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <HeaderUl>
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
            <img src={userList} alt="user list" />
            List of user
          </HeaderLi>
        </HeaderUl>
      </ContentCenter>
    </Header>
  );
};
