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

const GenerateUsers = ({ itemCount = 50 }) => {
  const dispatch = useDispatch();

  const generateArrayOfPhones = () => {
    const arrayOfPhones = [];
    for (let i = 0; i < Faker.random.number(3); i++) {
      arrayOfPhones.push(
        `+38${Faker.PhoneNumber.phoneNumberFormat(1).replace(/\d/, 0)}`
      );
    }
    return arrayOfPhones;
  };

  const generateArrayOfValues = (options, minNumber) => {
    const arrayOfValues = [];

    for (let i = 0; i < minNumber; i++) {
      const fakerValues = Faker.random.array_element(options);
      arrayOfValues.push(fakerValues);
    }

    return [...new Set(arrayOfValues.map((item) => item))];
  };

  const updateUserTimeGenerate = () => {
    const created = new Date(Faker.Date.past(10));
    return {
      createdAt: created,
      updatedAt: new Date(created.getTime() + Faker.random.number(15454)),
    };
  };

  const handleGenerate = () => {
    const arrayOfUsers = [];
    const arrayOfHobbies = HOBBIES.map(({ label }) => label);

    for (let i = 0; i < itemCount; i++) {
      arrayOfUsers.push({
        avatar: Faker.Image.people(100, 100),
        username: Faker.Internet.userName(),
        password: Faker.Internet.userName(),
        lastName: Faker.Name.lastName(),
        firstName: Faker.Name.firstName(),
        company: Faker.Company.companyName(),
        info: Faker.Lorem.paragraph(),
        email: Faker.Internet.email(),
        language: Faker.random.array_element(LANGUAGE),
        gender: Faker.random.array_element(['male', 'female']),
        fax: `+38${Faker.PhoneNumber.phoneNumberFormat(1).replace(/\d/, 0)}`,
        facebook: `https://facebook.com/${Faker.Name.lastName()}`,
        github: `https://github.com/${Faker.Name.lastName()}`,
        birthday: new Date(Faker.Date.between('1950-01-01', '2002-01-01')),
        hobbies: generateArrayOfValues(arrayOfHobbies, 3),
        phones: generateArrayOfPhones(),
        createdAt: updateUserTimeGenerate().createdAt,
        updatedAt: updateUserTimeGenerate().updatedAt,
        skills: generateArrayOfValues(SKILLS, 3),
      });

      dispatch(addUsersToDB(arrayOfUsers));
    }
  };

  return (
    <ButtonWrapper>
      <CreateUserButton type="button" onClick={handleGenerate} margin="20px">
        Generate Users
      </CreateUserButton>
    </ButtonWrapper>
  );
};

GenerateUsers.propTypes = {
  itemCount: PropTypes.number.isRequired,
};

export default GenerateUsers;
