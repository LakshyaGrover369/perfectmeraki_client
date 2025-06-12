import { Middleware } from "redux";

const logger: Middleware = (_store) => (next) => (action) => {
  console.log("dispatching", action);
  return next(action);
};

export const middleware = [logger];
