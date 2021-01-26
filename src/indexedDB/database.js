import Dexie from 'dexie';

const db = new Dexie('myDb');
db.version(1).stores({
  user: 'id, name, age',
});

export const getUsers = () => db.user.toArray();

export const addNewUser = ({
  username,
  password,
  firstName,
  lastName,
  gender,
  birthday,
  email,
  address,
  company,
  fax,
  facebookLink,
  phoneNumber,
  skills,
  hobbies,
}) =>
  db.user.add({
    username,
    password,
    firstName,
    lastName,
    gender,
    birthday,
    email,
    address,
    company,
    fax,
    facebookLink,
    phoneNumber,
    skills,
    hobbies,
  });

export const updateDataUser = (id, name) => db.user.update(id, { name });
export const setValues = ({ username }) =>
  db.user.add({ id: Date.now().toString(), name: username });
export const deleteUser = (id) => db.user.delete(id);
export default { db, getUsers, addNewUser, updateDataUser };
