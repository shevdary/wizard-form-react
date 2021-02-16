export const LOAD_START = 'LOADER/IS_LOAD_START';
export const LOAD_STOP = 'LOADER/IS_LOAD_STOP';
// actions
export const startLoad = () => ({
  type: LOAD_START,
});

export const stopLoad = () => ({
  type: LOAD_STOP,
});
