import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

constructor(private http: HttpClient) {}

  setStreamingSession(): Observable<{ success: boolean }> {
    return this.http.post<{ success: boolean }>(environment.backendApiUrl +'/session', {}, { withCredentials: true }); // ✅ important: allow cookies
  }
}
