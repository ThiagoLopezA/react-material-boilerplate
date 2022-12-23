import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {
  getAccessToken,
  getRefreshToken,
  removeTokens,
  setRefreshToken
} from '../utilities';

const BASE_URL = 'http://127.0.0.1:4001';
const REFRESH_TOKEN_URL = '/auth/refresh-token';

export default function useAxios() {
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content.Type': 'application/json'
    }
  });

  instance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getAccessToken();
      if (token && config.headers)
        config.headers['Authorization'] = `Bearer ${token}`;
      return config;
    },
    (error: any) => {
      if (!error.response) error.errorStatus = 'Error: Network Error';
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res: AxiosResponse) => {
      return res;
    },
    async (err: any) => {
      const originalConfig = err.config;
      if (err.response.status === 403 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post(REFRESH_TOKEN_URL, {
            refreshToken: getRefreshToken()
          });
          const { accessToken } = rs.data;
          setRefreshToken(accessToken);
          return instance(originalConfig);
        } catch (error) {
          removeTokens();
          window.location.reload();
          return Promise.reject(error);
        }
      }
      return Promise.reject(err);
    }
  );

  return instance;
}
