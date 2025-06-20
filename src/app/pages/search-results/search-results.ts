import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieService } from 'src/app/services/movie';

@Component({
  selector: 'app-search-results',
  standalone: true, // ✅ مهم جداً
  imports: [CommonModule, RouterModule], // ✅ لتفعيل *ngIf, *ngFor, routerLink
  templateUrl: './search-results.html',
  styleUrls: ['./search-results.css']
})
export class SearchResultsComponent implements OnInit {
  query: string = '';
  results: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.query = params.get('query') || '';
      this.searchMovies();
    });
  }

  searchMovies() {
    if (this.query.trim()) {
      this.movieService.searchMovies(this.query).subscribe((res: any) => {
        this.results = res.results;
      });
    }
  }

  viewDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}
