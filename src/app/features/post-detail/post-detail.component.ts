import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { PostsService } from '../post-list/posts.service'

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>post-detail works!</p> `,
  styles: ``,
})
export class PostDetailComponent {
  postService = inject(PostsService)
}
