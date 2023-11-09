import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  template: `
    <div class="space-y-4">
      <h1 class="bg-red-800 p-4 text-red-200 text-2xl">Welcome to {{ title }}!</h1>
      <nav class="px-4 space-x-2">
        <a class="px-4 p-2 rounded-lg bg-black text-white" routerLink="/">Home</a>
        <a class="px-4 p-2 rounded-lg bg-black text-white" routerLink="/about">About</a>
        <a class="px-4 p-2 rounded-lg bg-black text-white" routerLink="/contact">Contact</a>
        <a class="px-4 p-2 rounded-lg bg-black text-white" routerLink="/posts">Posts</a>
      </nav>
      <div class="p-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'ng17-sandbox'
}
