import { Routes } from '@angular/router'

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent) },
  { path: 'about', loadComponent: () => import('./features/about/about.component').then((m) => m.AboutComponent) },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: 'posts',
    loadComponent: () => import('./features/post-list/post-list.component').then((m) => m.PostListComponent),
  },
  {
    path: 'posts/:slug',
    loadComponent: () => import('./features/post-detail/post-detail.component').then((m) => m.PostDetailComponent),
  },
]
