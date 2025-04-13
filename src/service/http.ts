import type { AxiosResponse } from "axios";
import api from "./config";

const get = async <T>(
  url: string,
  params?: object,
  baseUrl?: string,
): Promise<AxiosResponse<T>> => {
  return api(baseUrl).get(url, { params });
};

export { get };
