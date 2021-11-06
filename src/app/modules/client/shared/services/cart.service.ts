import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getCartItems() {
    return this.http.get(`${baseURL}/api/carts`);
  }

  addToCart(data: any) {
    return this.http.post(`${baseURL}/api/carts`, data);
  }

  removeCartItem(cartId: any) {
    return this.http.delete(`${baseURL}/api/carts/${cartId}`);
  }

  reduceQtyCartItem(data: any) {
    return this.http.post(`${baseURL}/api/carts/dec`, data);
  }

  increaseQtyCartItem(data: any) {
    return this.http.post(`${baseURL}/api/carts/inc`, data);
  }
}
