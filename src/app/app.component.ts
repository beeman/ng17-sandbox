import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <h1>Welcome to {{ title }}!</h1>
    <nav style="display: flex; gap: 4px;">
      <a routerLink="/">Home</a>
      <a routerLink="/about">About</a>
      <a routerLink="/contact">Contact</a>
      <a routerLink="/posts">Posts</a>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'ng17-sandbox'
}
