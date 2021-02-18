import { call, takeEvery, put } from 'redux-saga/effects';
// db
import { addArrayOfValuesToDB, getUserListFromDB } from 'indexedDB/database';
// store
import { startLoad, stopLoad } from 'store/loader';
import { DELETE_FROM_DB } from 'store/db/actions';
import {
  clearUsersFromStore,
  deleteUserFromList,
  GENERATE_USERS,
  GET_USERS,
  setUserList,
} from 'store/users/actions';
// utils
import Faker from 'Faker';
import {
  generateArrayOfHobbies,
  generateArrayOfPhones,
  generateArrayOfSkills,
  updateUserTimeGenerate,
} from 'utils/generate';
import { HOBBIES, LANGUAGE, SKILLS } from 'utils/optionsValue';

export function* ensureAddUserToList() {
  yield put(startLoad());
  try {
    const values = yield call(getUserListFromDB);
    yield put(setUserList(values));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(stopLoad());
  }
}

export function* ensureDeleteUserFromList(action) {
  try {
    yield put(deleteUserFromList(action.payload));
  } catch (e) {
    console.log(e);
  }
}
export function* ensureAddUsersToDB(action) {
  yield put(clearUsersFromStore());
  try {
    const arrayOfUsers = new Array(action.payload).fill(null).map(() => ({
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
    addArrayOfValuesToDB(arrayOfUsers);
  } catch (e) {
    console.log(e);
  }
}

export function* sagaWatcherUserList() {
  yield takeEvery(GET_USERS, ensureAddUserToList);
  yield takeEvery(DELETE_FROM_DB, ensureDeleteUserFromList);
  yield takeEvery(GENERATE_USERS, ensureAddUsersToDB);
}
