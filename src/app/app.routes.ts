import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { DetailPage } from './pages/detail-page/detail-page';
import { MoviesResolver } from './resolver/movie-resolver-resolver';
import { MovieResolver } from './resolver/movie-details-resolver';

export const routes: Routes = [
     {
    path: '',
    component: HomePage,
    resolve: {
      movies: MoviesResolver
    }
  },
  {
    path: 'details/:id',
    component: DetailPage,
    resolve: { 
      movie: MovieResolver 
    }
  }
];
