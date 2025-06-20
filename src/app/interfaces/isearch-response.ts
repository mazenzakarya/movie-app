import { Movie } from "./imovie";

export interface SearchResponse {
  results: Movie[];
  total_results?: number;
  total_pages?: number;
}
