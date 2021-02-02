import Dexie from 'dexie';

const db = new Dexie('user');
db.version(1).stores({
  user: '++id',
});

export const userFormSelectors = async () => db.user.toArray();

export const addNewUser = (values) => {
  db.user.add(values);
};

export const updateDataUser = (id, name) => db.user.update(id, { name });

export const setValues = ({ username }) =>
  db.user.add({ id: Date.now().toString(), name: username });

export const deleteUser = (pk) => db.user.delete(pk);

export default { db, userFormSelectors, addNewUser, updateDataUser };
