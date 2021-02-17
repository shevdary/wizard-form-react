/*eslint-disable*/
import React, { useState } from 'react';
import Faker from 'Faker';
import { ButtonWrapper } from './styled';
import { LANGUAGE, SKILLS } from 'utils/optionsValue';
import { useDispatch } from 'react-redux';
import { updateUser } from 'store/user';
import { addValueToDB } from 'store/db';

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

  const generateArrayOfHobbies = () => {
    const arrayOfHobbies = [];
    for (let i = 0; i < Faker.random.number(6); i++) {
      !arrayOfHobbies.includes(
        Faker.random.array_element([
          'sport, fitness, aerobica and staff like that',
          'I just want to play games, I’m not living in this life',
          'I’m a female... I’m doing nothing. Every day.',
          'Guitar, guitar and guitar again. I’m fall in love with it.',
          'WTF is “hobbies”???',
          'Art',
        ])
      ) &&
        arrayOfHobbies.push(
          Faker.random.array_element([
            'sport, fitness, aerobica and staff like that',
            'I just want to play games, I’m not living in this life',
            'I’m a female... I’m doing nothing. Every day.',
            'Guitar, guitar and guitar again. I’m fall in love with it.',
            'WTF is “hobbies”???',
            'Art',
          ])
        );
    }
    return arrayOfHobbies;
  };

  const generateArrayOfSkills = () => {
    const arrayOfSkills = [];
    for (let i = 0; 3 < i < Faker.random.number(SKILLS.length); i++) {
      !arrayOfSkills.includes(Faker.random.array_element(SKILLS)) &&
        arrayOfSkills.push(Faker.random.array_element(SKILLS));
    }
    return arrayOfSkills;
  };

  const handleGenerate = () => {
    generateArrayOfPhones();
    const arrayOfUsers = [];
    for (let i = 0; i < 50; i++) {
      arrayOfUsers.push();
    }

    dispatch(
      updateUser({
        avatar: Faker.Image.people(100, 100),
        username: Faker.Internet.userName(),
        password: Faker.Internet.userName(),
        lastName: Faker.Name.lastName(),
        firstName: Faker.Name.firstName(),
        company: Faker.Company.companyName(),
        birthday: new Date(Faker.Date.between('1950-01-01', '2002-01-01')),
        phones: generateArrayOfPhones(),
        language: Faker.random.array_element(LANGUAGE),
        email: Faker.Internet.email(),
        fax: `+38${Faker.PhoneNumber.phoneNumberFormat(1).replace(/\d/, 0)}`,
        hobbies: generateArrayOfHobbies(),
        address: Faker.Address.streetAddress(true),
        facebook: `https://facebook.com/${Faker.Name.lastName()}`,
        github: `https://github.com/${Faker.Name.lastName()}`,
        info: Faker.Lorem.paragraph(),
        createAt: new Date(Faker.Date.past(5)),
        updateAt: new Date(Faker.Date.past(5)),
        skills: generateArrayOfSkills(),
        gender: Faker.random.array_element(['male', 'female']),
      })
    );
    dispatch(addValueToDB());
  };
  return (
    <ButtonWrapper>
      <button type="button" onClick={handleGenerate}>
        Generate
      </button>
    </ButtonWrapper>
  );
};

export default GenerateUsers;
