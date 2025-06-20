import { Routes } from '@angular/router';

import { MoviesListComponent } from './pages/movies-list/movies-list';
import { MovieDetailsComponent } from './pages/movie-details/movie-details';
import { WishlistComponent } from './pages/wishlist/wishlist';
import { SearchResultsComponent } from './pages/search-results/search-results';
import { NotFoundComponent } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'search/:query', component: SearchResultsComponent },
  { path: '**', component: NotFoundComponent },
];
