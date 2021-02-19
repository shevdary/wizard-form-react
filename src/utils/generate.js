import Faker from 'Faker';
import { HOBBIES, LANGUAGE, SKILLS } from './optionsValue';

export const generateArrayOfPhones = () =>
  new Array(Faker.random.number(3))
    .fill(null)
    .map(() => `+38${Faker.PhoneNumber.phoneNumberFormat(1).replace(/\d/, 0)}`);

export const generateArrayOfSkills = (options, minNumber) => {
  const arrayOfValues = new Array(minNumber)
    .fill(null)
    .map(() => Faker.random.array_element(options));
  return [...new Set(arrayOfValues.map((item) => item))];
};

export const generateArrayOfHobbies = (hobbies, minNumber) => {
  const arrayOfValues = new Array(minNumber)
    .fill(null)
    .map(() => Faker.random.array_element(hobbies));
  return [...new Set(arrayOfValues.map((item) => item))].map(
    ({ label }) => label
  );
};

export const updateUserTimeGenerate = () => {
  const created = new Date(Faker.Date.past(10));
  return {
    createdAt: created,
    updatedAt: new Date(created.getTime() + Faker.random.number(15454)),
  };
};

export const arrayOfUsers = (count) =>
  [...new Array(count)].map(() => ({
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
    hobbies: generateArrayOfHobbies(HOBBIES, 3),
    phones: generateArrayOfPhones(),
    createdAt: updateUserTimeGenerate().createdAt,
    updatedAt: updateUserTimeGenerate().updatedAt,
    skills: generateArrayOfSkills(SKILLS, 3),
  }));
