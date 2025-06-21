import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { MovieService } from 'src/app/services/movie';
import { WishlistService } from 'src/app/services/wishlist';
import { Movie } from 'src/app/interfaces/imovie';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.css'],
})
export class WishlistComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
    private movieService: MovieService,
    private wishlistService: WishlistService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadWishlist();
  }

  loadWishlist(): void {
    const ids = this.wishlistService.getWishlist();
    this.movies = [];
    ids.forEach((id) => {
      this.movieService.getMovieDetails(id).subscribe((movie) => {
        this.movies.push(movie);
      });
    });
  }

  removeFromWishlist(id: number): void {
    this.wishlistService.removeFromWishlist(id);
    this.loadWishlist();
  }

  viewDetails(id: number): void {
    this.router.navigate(['/movie', id]);
  }
}
