import React from 'react';
import { useHistory } from 'react-router-dom';
// assets
import not from 'assets/image/404.png';
// styled
import {
  ErrorSub,
  ErrorTitle,
  ErrorWrapper,
  RedirectButton,
  ButtonWrapper,
} from './styled';

const NotFound = ({ title }) => {
  const history = useHistory();

  const redirectToCreateUser = () => {
    history.push('/create-user');
  };

  const redirectToListOfUser = () => {
    history.push('/user-list');
  };

  return (
    <ErrorWrapper src={not}>
      <ErrorTitle>404 Page is not found</ErrorTitle>

      <ErrorSub>{title || 'Oooops, you went beyond the possible'}</ErrorSub>
      <ButtonWrapper>
        <RedirectButton type="button" onClick={redirectToCreateUser} right>
          Go to create user
        </RedirectButton>
        <RedirectButton type="button" onClick={redirectToListOfUser} left>
          Go to list of user
        </RedirectButton>
      </ButtonWrapper>
    </ErrorWrapper>
  );
};

export default NotFound;
