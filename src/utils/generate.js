import Faker from 'Faker';

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
