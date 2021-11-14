import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
const baseURL = environment.baseURL;

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  checkoutData: any = {
    checkoutCartItemsArr: [],
    subtotal: 0,
  };

  constructor(private http: HttpClient) {}

  addCheckoutCartItems(itemsArr: any, subtotal: number) {
    this.checkoutData.checkoutCartItemsArr = itemsArr;
    this.checkoutData.subtotal = subtotal;
  }

  getCheckoutData() {
    return this.checkoutData;
  }

  placeOrder(data: any) {
    return this.http.post(`${baseURL}/api/orders`, data)
  }

  getOrders() {
    return this.http.get(`${baseURL}/api/orders`)
  }
}
