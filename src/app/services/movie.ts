import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie, RecommendationResponse } from 'src/app/interfaces/imovie';
import { NowPlayingResponse } from 'src/app/interfaces/inow-playing-response';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiKey = environment.apiKey;
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getNowPlaying(page: number = 1): Observable<NowPlayingResponse> {
    const url = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}`;
    return this.http.get<NowPlayingResponse>(url);
  }

  getMovieDetails(id: number): Observable<Movie> {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`;
    return this.http.get<Movie>(url);
  }

  getRecommendations(id: number): Observable<RecommendationResponse> {
    const url = `${this.baseUrl}/movie/${id}/recommendations?api_key=${this.apiKey}`;
    return this.http.get<RecommendationResponse>(url);
  }

  searchMovies(query: string): Observable<{ results: Movie[] }> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get<{ results: Movie[] }>(url);
  }
}
