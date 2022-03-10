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


  discoverProducts(limit: number) {
    return this.http.get(`${baseURL}/api/products/discover?limit=${limit}`);
  }

  fetchUserStoreProducts(): Observable<any> {
    return this.http.get(`${baseURL}/api/products`);
  }

  topProducts(): Observable<any> {
    return this.http.get(`${baseURL}/api/products/new`);
  }

  newProducts() {
    return this.http.get(`${baseURL}/api/products/new`);
  }

  simillarProducts(): Observable<any> {
    return this.http.get(`${baseURL}/api/products`);
  }

  getProductCategories() {
    return this.http.get(`${baseURL}/api/categories`);
  }

  getCategoryProducts(categoryName: any) {
    return this.http.get(`${baseURL}/api/categories/${categoryName}`);
  }
}
