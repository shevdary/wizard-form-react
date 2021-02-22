export const usersSlice = (currentPage, itemOnPage, value) =>
  value.slice(currentPage * itemOnPage - itemOnPage, currentPage * itemOnPage);
