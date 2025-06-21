import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule,RouterModule],
  template: `
    <div
      class="d-flex flex-column justify-content-center align-items-center text-center"
      style="min-height: 100vh;"
    >
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="404 Not Found"
        style="max-width: 300px; margin-bottom: 30px;"
      />
      <h1 style="font-size: 4rem;">404</h1>
      <p style="font-size: 1.25rem;">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a routerLink="/" class="btn btn-outline-danger mt-4">🏠 Back to Home</a>
    </div>
  `,
})
export class NotFoundComponent {}