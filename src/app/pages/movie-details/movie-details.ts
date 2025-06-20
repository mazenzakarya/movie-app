import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieService } from 'src/app/services/movie';
import { WishlistService } from 'src/app/services/wishlist';
import { DateFormatPipe } from 'src/app/pipes/date-format-pipe';
import { Movie, RecommendationResponse } from 'src/app/interfaces/imovie';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, RouterModule, DateFormatPipe],
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.css'],
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie | null = null;
  recommendations: Movie[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      if (isNaN(id)) {
        this.router.navigate(['/404']);
        return;
      }

      this.movie = null;
      this.recommendations = [];

      this.movieService.getMovieDetails(id).subscribe({
        next: (res: Movie) => {
          if (!res || res.success === false) {
            this.router.navigate(['/404']);
            return;
          }

          this.movie = res;

          this.movieService.getRecommendations(id).subscribe((rec: RecommendationResponse) => {
            this.recommendations = rec.results || [];
          });

          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        error: () => {
          this.router.navigate(['/404']);
        },
      });
    });
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
}
