import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../../environments/environment';

// baseURL
const baseUrl = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {}

  getProfileData = () => {
    return this.http.get(`${baseUrl}/api/profile`);
  }

  userUpdateDetails(data: any) {
    return this.http.patch(`${baseUrl}/api/updatedetails`, data);
  }
}
