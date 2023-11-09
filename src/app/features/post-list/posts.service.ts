import { Injectable } from '@angular/core'

export interface Post {
  title: string
  slug: string
  content: string
}

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  posts: Post[] = [
    { title: 'Post 1', slug: 'post-1', content: 'This is the first post' },
    { title: 'Post 2', slug: 'post-2', content: 'This is the second post' },
    { title: 'Post 3', slug: 'post-3', content: 'This is the third post' },
  ]
  constructor() {}
}
