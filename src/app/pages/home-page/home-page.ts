import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Movie } from '../../classes/movie';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage implements OnInit {
 movies: Movie[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.movies = this.route.snapshot.data['movies'];
    console.log('Movies loaded from resolver:', this.movies);
  }

  getMovieImage(movie: Movie): string {
    return environment.awsCloudfrontUrl + '/' + movie.filename + '/' + movie.image;
      
  }
}