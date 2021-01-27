export const USER_INFO_STORAGE = localStorage.getItem('filledFields');

export const savePage = (path) => localStorage.setItem('currentPath', path);

export const saveInfo = (data) =>
  localStorage.setItem('filledFields', JSON.stringify(data));
