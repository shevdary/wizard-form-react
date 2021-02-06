import Dexie from 'dexie';

const db = new Dexie('user');
db.version(1).stores({
  user: '++id',
});

export const setNewUserToDB = (values) => {
  db.user.add(values);
};
export const deleteUserFromDB = (id) => db.user.delete(id);
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
