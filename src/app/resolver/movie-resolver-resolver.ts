import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MovieService } from '../services/movie-service';
import { Movie } from '../classes/movie';

@Injectable({ providedIn: 'root' })
export class MoviesResolver implements Resolve<Movie[]> {
  constructor(private movieService: MovieService) {}

  resolve() {
    return this.movieService.getAllMovies();
  }
}