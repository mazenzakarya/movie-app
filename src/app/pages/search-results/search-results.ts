import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieService } from 'src/app/services/movie';
import { DateFormatPipe } from '../../pipes/date-format-pipe';
import { Movie } from 'src/app/interfaces/imovie';
import { SearchResponse } from 'src/app/interfaces/isearch-response';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, RouterModule, DateFormatPipe],
  templateUrl: './search-results.html',
  styleUrls: ['./search-results.css'],
})
export class SearchResultsComponent implements OnInit {
  query: string = '';
  results: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.query = params.get('query') || '';
      this.searchMovies();
    });
  }

  searchMovies() {
    if (this.query.trim()) {
      this.movieService
        .searchMovies(this.query)
        .subscribe((res: SearchResponse) => {
          this.results = res.results;
        });
    }
  }

  viewDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}
