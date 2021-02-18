import React from 'react';
import { useHistory } from 'react-router-dom';
// styled
import {
  CreateUserButton,
  EmptyListArticle,
  EmptyListContainer,
  TextShadow,
} from 'components/UsersTable/styled';
import GenerateUsers from '../../../GenerateUsers';

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
        <GenerateUsers itemCount={50} handleGenerate={handleGenerateUsers} />
      </EmptyListArticle>
    </EmptyListContainer>
  );
};

export default EmptyUserList;
