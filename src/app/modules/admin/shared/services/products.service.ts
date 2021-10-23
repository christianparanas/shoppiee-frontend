import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// base enpoint url
const baseUrl = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  fetchProducts(): Observable<any> {
    return this.http.get(`${baseUrl}/products`);
  }
}
