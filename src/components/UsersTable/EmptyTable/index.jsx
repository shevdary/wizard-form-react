import React from 'react';
import { useHistory } from 'react-router-dom';
// styled
import {
  CreateUserButton,
  EmptyListArticle,
  EmptyListContainer,
  TextShadow,
} from 'components/UsersTable/styled';

const EmptyUserList = () => {
  const history = useHistory();

  const onClick = () => {
    history.push('/create-user');
  };

  return (
    <EmptyListContainer>
      <EmptyListArticle>
        <TextShadow>No users here :(</TextShadow>
        <CreateUserButton type="forward" onClick={onClick}>
          Create new user
        </CreateUserButton>
      </EmptyListArticle>
    </EmptyListContainer>
  );
};

export default EmptyUserList;
