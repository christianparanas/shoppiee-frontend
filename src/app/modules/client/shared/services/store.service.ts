import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getStoreData(storeId: any) {
    return this.http.get(`${baseURL}/api/stores/store/${storeId}`, { headers: { skip: 'true' } });
  }

  getUserStoreData() {
    return this.http.get(`${baseURL}/api/stores/userstore`);
  }

  userStoreUpdateDetails(data: any) {
    return this.http.patch(`${baseURL}/api/stores/updateDetails`, data);
  }
}
