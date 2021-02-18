export const range = (fromIndex, toIndex, step = 1) => {
  let i = fromIndex;
  const rangeArray = [];

  while (i <= toIndex) {
    rangeArray.push(i);
    i += step;
  }

  return rangeArray;
};
