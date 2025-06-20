import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from 'src/app/services/movie';
import { WishlistService } from '../../services/wishlist';

@Component({
  selector: 'app-movie-details',
  standalone: true, 
  imports: [CommonModule, RouterModule], 
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: any;
  recommendations: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movieService.getMovieDetails(id).subscribe(res => this.movie = res);
    this.movieService.getRecommendations(id).subscribe((res: any) => this.recommendations = res.results);
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
