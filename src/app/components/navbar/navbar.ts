import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WishlistService } from '../../services/wishlist';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  searchTerm: string = '';

  constructor(
    private router: Router,
    public wishlistService: WishlistService
  ) {}

  get wishlistCount(): number {
    return this.wishlistService.getWishlist().length;
  }

  search() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/search', this.searchTerm.trim()]);
    }
  }
}
