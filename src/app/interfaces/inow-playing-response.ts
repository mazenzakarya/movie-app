import { Movie } from "./imovie";

export interface NowPlayingResponse {
  results: Movie[];
  total_pages: number;
}


