import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private storageKey = 'wishlist';

  getWishlist(): number[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  addToWishlist(id: number): void {
    const list = this.getWishlist();
    if (!list.includes(id)) {
      list.push(id);
      localStorage.setItem(this.storageKey, JSON.stringify(list));
    }
  }

  removeFromWishlist(id: number): void {
    const list = this.getWishlist().filter(item => item !== id);
    localStorage.setItem(this.storageKey, JSON.stringify(list));
  }

  isInWishlist(id: number): boolean {
    return this.getWishlist().includes(id);
  }
}
