import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as moment from 'moment';

import { environment } from '../../../environments/environment';

// baseURL
const baseUrl = environment.baseURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  register(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/auth/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/auth/login`, data);
  }

  setSession(authResult: any) {
    const jwtToken = authResult[0].original.token;
    const expiresAt = moment().add(authResult[0].original.expires_in, 'second');

    localStorage.setItem('uJwtToken', jwtToken);
    localStorage.setItem('uExpires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('uJwtToken');
    localStorage.removeItem('uExpires_at');
  }

  public isLoggedIn(): boolean {
    // for dev
    return moment().isBefore(this.getExpiration());

    // for production - because our backend not yet deployed on a live server
    // return true;
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration: any = localStorage.getItem('uExpires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
