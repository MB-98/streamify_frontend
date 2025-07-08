import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SessionService } from './services/session-service';
import { hasCloudFrontCookies } from './util/cookie.util';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Streamify';

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    if (!hasCloudFrontCookies()) {
      this.sessionService.setStreamingSession().subscribe({
        next: () => console.log('Signed cookies set'),
        error: (err) => console.error('Failed to set streaming session', err)
      });
    } else {
      console.log('CloudFront cookies already present');
    }
  }

}
