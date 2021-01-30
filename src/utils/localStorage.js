export const savePage = (path) => localStorage.setItem('currentPath', path);

export const setItem = (data) =>
  localStorage.setItem('unmount', JSON.stringify(data));

export const removeItem = () => localStorage.clear();

export const getItem = () => localStorage.getItem('unmount');

export const setPath = (path) => localStorage.setItem('pageLeave', path);

export const getPath = () => localStorage.getItem('pageLeave');
