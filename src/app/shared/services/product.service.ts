import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// base enpoint url
const baseUrl = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  fetchSpecificProduct(productId: number) {
    return this.http.get(`${baseUrl}/products/${productId}`);
  }

  discoverProducts(): Observable<any> {
    return this.http.get(`${baseUrl}/products?limit=11`);
  }

  topProducts(): Observable<any> {
    return this.http.get(`${baseUrl}/products?limit=7`);
  }

  newProducts(): Observable<any> {
    return this.http.get(`${baseUrl}/products?limit=7`);
  }

  simillarProducts(): Observable<any> {
    return this.http.get(`${baseUrl}/products?limit=11`);
  }

  productCategories(): Observable<any> {
    return this.http.get(`${baseUrl}/products/categories`);
  }

  fetchSpecificCategoryProduct(categoryId: any): Observable<any> {
    return this.http.get(`${baseUrl}/products/category/${categoryId}`);
  }
}
