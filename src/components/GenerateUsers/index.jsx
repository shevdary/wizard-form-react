/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
// redux
import { useDispatch } from 'react-redux';
import { addUsersToDB } from 'store/users';
// utils
import Faker from 'Faker';
import { HOBBIES, LANGUAGE, SKILLS } from 'utils/optionsValue';
// styled
import { CreateUserButton } from 'components/UsersTable/styled';
import { ButtonWrapper } from './styled';

const GenerateUsers = ({ itemCount = 50, handleGenerate }) => {
  return (
    <ButtonWrapper>
      <CreateUserButton
        type="button"
        onClick={() => handleGenerate(itemCount)}
        margin="20px"
      >
        Generate Users
      </CreateUserButton>
    </ButtonWrapper>
  );
};

GenerateUsers.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default GenerateUsers;
