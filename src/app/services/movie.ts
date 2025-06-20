import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = environment.apiKey;
  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getNowPlaying(page: number = 1) {
    return this.http.get(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}`);
  }

  getMovieDetails(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getRecommendations(id: number) {
    return this.http.get(`${this.baseUrl}/movie/${id}/recommendations?api_key=${this.apiKey}`);
  }

  searchMovies(query: string) {
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
  }
}
