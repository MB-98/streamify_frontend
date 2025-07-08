import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie-service';
import { Movie } from '../../classes/movie';
import { Streaming } from '../../components/streaming/streaming';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-detail-page',
  imports: [CommonModule, RouterModule, Streaming],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.scss'
})
export class DetailPage implements OnInit {
 
  private activatedRoute = inject(ActivatedRoute);
  cloudfrontUrl = "";

  movie!: Movie;

  ngOnInit(): void {
    this.movie = this.activatedRoute.snapshot.data['movie'];
    console.log('Movie ID from route:', this.movie);
    this.cloudfrontUrl = environment.awsCloudfrontUrl + '/' + this.movie.filename + '/' +this.movie.filename+ '.m3u8';
    console.log('CloudFront URL:', this.cloudfrontUrl);
    console.log('Movie details loaded:', this.movie);
  }
  
}
