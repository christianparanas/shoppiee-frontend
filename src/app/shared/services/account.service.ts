import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Router } from '@angular/router';
import { User } from '../interfaces/user'



// baseURL
const baseUrl = environment.baseURL

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  register(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/auth/register`, data);
  }

  login(data: any): Observable<any> {
    return this.http.post(`${baseUrl}/api/auth/login`, data);
  }

}
