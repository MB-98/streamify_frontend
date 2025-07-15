import { ChangeDetectorRef, Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule, RouterOutlet } from '@angular/router';
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
  hasSession = false;

  constructor(
    private sessionService: SessionService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.hasSession = false;
        this.cdr.detectChanges();
        this.checkSession();
      }
    });
    // Initial check
    this.checkSession();
  }

  private checkSession() {
    if (!hasCloudFrontCookies()) {
      this.sessionService.setStreamingSession().subscribe({
        next: () => {
          this.hasSession = true;
          this.cdr.detectChanges();
          console.log('Session cookies set');
        },
        error: (err) => console.error('Failed to set Session cookies', err)
      });
    } else {
      console.log('Session cookies already present');
      this.hasSession = true;
    }
  }
}