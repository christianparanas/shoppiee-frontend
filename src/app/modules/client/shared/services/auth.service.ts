import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { environment } from 'src/environments/environment';

// baseURL
const baseUrl = environment.baseURL;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/auth/register`, data, {headers:{skip:"true"}});
  }

  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/auth/login`, data, {headers:{skip:"true"}});
  }

  setSession(authResult: any) {
    const jwtToken = authResult.token;
    const expiresAt = moment().add(7200, 'second');

    localStorage.setItem('uJwtToken', jwtToken);
    localStorage.setItem('uExpires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('uJwtToken');
    localStorage.removeItem('uExpires_at');
  }

  public isLoggedIn(): boolean {
    if(moment().isBefore(this.getExpiration()) == false) this.logout()
    return moment().isBefore(this.getExpiration());
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
