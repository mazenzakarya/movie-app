import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MovieService } from 'src/app/services/movie';
import { WishlistService } from 'src/app/services/wishlist';

@Component({
  selector: 'app-movies-list',
  standalone: true, // ✅ لازم
  imports: [CommonModule, RouterModule], // ✅ CommonModule = ngIf / ngClass / ngFor
  templateUrl: './movies-list.html',
  styleUrls: ['./movies-list.css']
})
export class MoviesListComponent implements OnInit {
  movies: any[] = [];
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private movieService: MovieService,
    private wishlistService: WishlistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.movieService.getNowPlaying(this.currentPage).subscribe((res: any) => {
      this.movies = res.results;
      this.totalPages = res.total_pages;
    });
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchMovies();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchMovies();
    }
  }

  toggleWishlist(id: number): void {
    if (this.wishlistService.isInWishlist(id)) {
      this.wishlistService.removeFromWishlist(id);
    } else {
      this.wishlistService.addToWishlist(id);
    }
  }

  isInWishlist(id: number): boolean {
    return this.wishlistService.isInWishlist(id);
  }

  viewDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}
