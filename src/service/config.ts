import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

const apiConfig = (baseUrl?: string): AxiosRequestConfig => {
  return {
    baseURL: baseUrl,
  };
};

const initAxios = (config: AxiosRequestConfig): AxiosInstance => {
  return axios.create(config);
};

const api = (baseUrl = "/api") => {
  return initAxios(apiConfig(baseUrl));
};

export default api;
