const BASE_URL = process.env.NEXT_APP_API_BASE_URL;

export const API_ROUTES = {
  USERS: {
    GET_ALL: `${BASE_URL}/api/users/getAllUsers`,
    DELETE: (userId: string) => `${BASE_URL}/api/users/delete/${userId}`,
    GET_BY_ID: (userId: string) =>
      `${BASE_URL}/api/users/getUserById/${userId}`,
  },
  AUTH: {
    LOGIN: `${BASE_URL}/api/auth/login`,
    REGISTER: `${BASE_URL}/api/auth/register`,
  },
  CATALOGUE: {
    UPDATE: `${BASE_URL}/api/catalogue/updateCatalogue`,
  },
};
