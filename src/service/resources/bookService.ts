import { AxiosResponse } from "axios";
import { ResponseModel } from "../../models/httpModel";
import { get } from "../http";

interface Params {
  hitsPerPage?: number;
  query?: string
  page?: number
}

export const bookService = {
  async getBooks(params?: Params): Promise<AxiosResponse<ResponseModel>> {
    return await get("/search", params);
  }
};
