import React from 'react';
import { useHistory } from 'react-router-dom';
// components
import GenerateUsers from 'components/Buttons/GenerateButton';
// styled
import {
  CreateUserButton,
  EmptyListArticle,
  EmptyListContainer,
  TextShadow,
} from 'components/UsersTable/styled';

const EmptyUserList = ({ handleGenerateUsers }) => {
  const history = useHistory();

  const onClick = () => {
    history.push('/create-user/account');
  };
  return (
    <EmptyListContainer>
      <EmptyListArticle>
        <TextShadow>No users here :(</TextShadow>
        <CreateUserButton type="forward" onClick={onClick}>
          Create new user
        </CreateUserButton>
        <GenerateUsers
          itemCount={50}
          handleGenerateUsers={handleGenerateUsers}
        />
      </EmptyListArticle>
    </EmptyListContainer>
  );
};

export default EmptyUserList;
