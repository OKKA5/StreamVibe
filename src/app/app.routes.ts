import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('../Components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'Subscribtions',
    loadComponent: () => import('../Components/subscribtions/subscribtions.component').then(m => m.SubscribtionsComponent)
  },
  {
    path: 'Support',
    loadComponent: () => import('../Components/support/support.component').then(m => m.SupportComponent)
  },
  {
    path: 'movies&shows',
    loadComponent: () => import('../Components/movies-shows/movies-shows.component').then(m => m.MoviesShowsComponent)
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('../Components/movie-details/movie-details.component').then(m => m.MovieDetailsComponent)
  },
  {
    path: 'tv/:id',
    loadComponent: () => import('../Components/show-details/show-details.component').then(m => m.ShowDetailsComponent)
  },
  {
    path: 'Search',
    loadComponent: () => import('../Components/search/search.component').then(m => m.SearchComponent)
  },
  {
    path: '**',
    loadComponent: () => import('../Components/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
