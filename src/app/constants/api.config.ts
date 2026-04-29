import { environment } from "../enviroment/enviroment";

export const API_CONFIG = {
  BASE_URL: environment.apiUrl,

  AUTH: {
    LOGIN: 'api/auth/login',
    SIGNUP: 'api/auth/signup',
    LOGOUT: 'api/auth/logout'
  },

  COMPANY: {
    GET_PROFILE: '/company/profile'
  },

  HOLIDAY: {
    GET_ALL: '/holidays',
    CREATE: '/holidays',
    UPDATE: (id: number) => `/holidays/${id}`,
    DELETE: (id: number) => `/holidays/${id}`
  },
  EMPLOYEE: {
    GET_ALL: 'api/emp',
    CREATE: 'api/emp',
    UPDATE: (id: number) => `api/emp/${id}`,
    DELETE: (id: number) => `api/emp/${id}`
  },
};