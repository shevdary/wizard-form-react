import React from 'react';
import PropTypes from 'prop-types';
// styled
import { CreateUserButton } from 'components/UsersTable/styled';
import { ButtonWrapper } from './styled';

const GenerateUsers = ({ handleGenerateUsers }) => (
  <ButtonWrapper>
    <CreateUserButton type="button" onClick={handleGenerateUsers} margin="20px">
      Generate Users
    </CreateUserButton>
  </ButtonWrapper>
);

GenerateUsers.propTypes = {
  handleGenerateUsers: PropTypes.func.isRequired,
};

export default GenerateUsers;
