import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';

import { environment } from 'src/environments/environment';
const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data: any) {
    return this.http.post(`${baseURL}/api/admin/auth/register`, data, {headers:{skip:"true"}});
  }

  login(data: any) {
    return this.http.post(`${baseURL}/api/admin/auth/login`, data);
  }

  setSession(authResult: any) {
    const jwtToken = authResult.token;
    const expiresAt = moment().add(7200, 'second');

    localStorage.setItem('adJwtToken', jwtToken);
    localStorage.setItem('adExpires_at', JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem('adJwtToken');
    localStorage.removeItem('adExpires_at');
  }

  public isLoggedIn(): boolean {
    if(moment().isBefore(this.getExpiration()) == false) this.logout()
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut(): boolean {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration: any = localStorage.getItem('adExpires_at');
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
