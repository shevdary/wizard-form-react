export function userMiddleware() {
  return function (next) {
    return function (action) {
      return next(action);
    };
  };
}
