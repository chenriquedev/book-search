import type { BookModel } from "./bookModel";

export interface ResponseModel {
  hits: BookModel[];
  hitsPerPage: number;
  nbPages: number;
  page: number;
  query: string;
  nbHits: number
}

export interface RequestModel {
  query?: string
  page?: number
  hitsPerPage?: number
}
