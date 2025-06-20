import { Genre } from "./igenre";

export interface Movie {
  id: number;
  title: string;
  overview?: string;
  release_date: string;
  poster_path?: string;
  vote_average?: number;
  success?: boolean;
  genres?: Genre[];
}

export interface RecommendationResponse {
  results: Movie[];
}
