import { environment } from "../enviroment/enviroment";

export const API_CONFIG = {
  BASE_URL: environment.apiUrl,

  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout'
  },

  COMPANY: {
    GET_PROFILE: '/company/profile'
  },

  HOLIDAY: {
    GET_ALL: '/holidays',
    CREATE: '/holidays',
    UPDATE: (id: number) => `/holidays/${id}`,
    DELETE: (id: number) => `/holidays/${id}`
  }
};