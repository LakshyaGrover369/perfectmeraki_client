const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ROUTES = {
  USERS: {
    GET_ALL: `${BASE_URL}/api/users/getAllUsers`,
    DELETE: (userId: string) => `${BASE_URL}/api/users/delete/${userId}`,
    GET_BY_ID: (userId: string) =>
      `${BASE_URL}/api/users/getUserById/${userId}`,
  },
  PRODUCTS: {
    EDIT: (productId: string) => `${BASE_URL}/api/admin/edit/${productId}`,
    ADD: `${BASE_URL}/api/admin/addProduct`,
    DELETE: (productId: string) => `${BASE_URL}/api/admin/delete/${productId}`,
    GET_BY_TYPE: `${BASE_URL}/api/admin/getProductsByType`,
  },
  WORKSHOPS: {
    GET_BY_TYPE: `${BASE_URL}/api/admin/getWorkshopsByType`,
  },
  AUTH: {
    LOGIN: `${BASE_URL}/api/auth/login`,
    REGISTER: `${BASE_URL}/api/auth/register`,
  },
  CATALOGUE: {
    UPDATE: `${BASE_URL}/api/admin/updateCatalogue`,
  },
};
