import Dexie from 'dexie';

export const DB_NEW_VERSION = 2;
const db = new Dexie('user');

db.version(1).stores({
  user: '++id',
});
db.version(DB_NEW_VERSION).stores({
  user: '++id',
});

export const setNewUserToDB = (values) => {
  db.user.add(values);
};

export const deleteUserFromDB = (id) => db.user.delete(id);
export const getCurrentVersionDB = () => db.verno;
export const clearOldVersionDB = () => {
  db.open().then(() => DB_NEW_VERSION > db.verno && db.user.clear());
};
export const getUserByID = (id) => db.user.get(Number(id));
export const updateUserInDB = (id, data) => db.user.update(Number(id), data);
export const getUserListFromDB = () =>
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
