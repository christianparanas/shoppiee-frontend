import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// fake base enpoint url
const baseUrl = 'https://fakestoreapi.com';

import { environment } from 'src/environments/environment';
const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addproduct(data: any) {
    return this.http.post(`${baseURL}/api/products`, data);
  }

  fetchSpecificProduct(productId: any) {
    return this.http.get(`${baseURL}/api/products/${productId}`);
  }

  searchProduct(query: any) {
    return this.http.get(`${baseURL}/api/products/search/${query}`);
  }


  discoverProducts(): Observable<any> {
    return this.http.get(`${baseURL}/api/products`);
  }

  fetchUserStoreProducts(): Observable<any> {
    return this.http.get(`${baseURL}/api/products`);
  }

  topProducts(): Observable<any> {
    return this.http.get(`${baseURL}/api/products`);
  }

  newProducts(): Observable<any> {
    return this.http.get(`${baseURL}/api/products`);
  }

  simillarProducts(): Observable<any> {
    return this.http.get(`${baseURL}/api/products`);
  }

  productCategories(): Observable<any> {
    return this.http.get(`${baseUrl}/products/categories`);
  }

  fetchSpecificCategoryProduct(categoryId: any): Observable<any> {
    return this.http.get(`${baseUrl}/products/category/${categoryId}`);
  }
}
