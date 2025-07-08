// src/app/services/movie.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Movie } from '../classes/movie'

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = environment.backendApiUrl + '/movie';

  getAllMovies(): Observable<Movie[]> {
    console.log('Fetching all movies from:', this.baseUrl);
    return this.http.get<Movie[]>(this.baseUrl, { withCredentials: true });
  }

  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/${id}`, { withCredentials: true });
  }
}
