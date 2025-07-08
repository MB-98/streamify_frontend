import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { MovieService } from '../services/movie-service';
import { Movie } from '../classes/movie';
import { Observable, EMPTY } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MovieResolver implements Resolve<Movie> {
  constructor(private movieService: MovieService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie> {
    const id = route.paramMap.get('id');
    if (!id || id.trim() === '') {
      this.router.navigate(['/']);
      return EMPTY;
    }
    return this.movieService.getMovieById(id).pipe(
      tap(movie => {
        if (!movie) {
          this.router.navigate(['/']);
        }
      }),
      catchError(() => {
        this.router.navigate(['/']);
        return EMPTY;
      })
    );
  }
}