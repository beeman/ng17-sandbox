import { Component, inject } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { PostsService } from './posts.service'

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <p>Posts!</p>
    <ul>
      <li *ngFor="let post of postService.posts">
        <a routerLink="/posts/{{ post.slug }}">{{ post.title }}</a>
      </li>
    </ul>
  `,
  styles: ``,
})
export class PostListComponent {
  postService = inject(PostsService)
}
