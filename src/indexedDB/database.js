import Dexie from 'dexie';

const db = new Dexie('user');
db.version(1).stores({
  user: '++id',
});

export const getUserListFromDB = () => db.user.toArray();
export const setNewUserToDB = (values) => {
  db.user.add(values);
};
export const deleteUserFromDB = (id) => db.user.delete(id);
