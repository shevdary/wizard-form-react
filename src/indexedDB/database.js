/*eslint-disable*/
import Dexie from 'dexie';

export const DB_NEW_VERSION = 3;
const db = new Dexie('user');

db.version(1).stores({
  user: '++id',
});

db.version(DB_NEW_VERSION).upgrade((transaction) =>
  transaction.idbtrans.db.deleteObjectStore('user')
);

export const setNewUserToDB = (values) => db.user.add(values);
export const deleteUserFromDB = (id) => db.user.delete(id);
export const getUserByID = (id) => db.user.get(Number(id));
export const updateUserInDB = (id, data) => db.user.update(Number(id), data);
export const getUsersFromDB = () =>
  db.user.toArray((items) =>
    items.map(
      ({
        id,
        username,
        avatar,
        lastName,
        firstName,
        phones,
        email,
        company,
        createdAt,
        updatedAt,
      }) => ({
        id,
        username,
        avatar,
        lastName,
        firstName,
        phones,
        email,
        company,
        createdAt,
        updatedAt,
      })
    )
  );
export const clearUsersFromDB = () => db.user.clear();
export const addArrayOfUsersToDB = (array) => db.user.bulkAdd(array);
export const filterUsersByName = (firstName) =>
  db.user
    .filter((user) => {
      if (user.firstName.toLowerCase() === firstName.toLowerCase()) {
        return user;
      }
    })
    .toArray((res) => res);
