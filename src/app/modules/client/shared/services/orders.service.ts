import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  checkoutData: any = {
    checkoutCartItemsArr: [],
    subtotal: 0
  }

  private _checkoutCartItemsArr: any = []
  private _subtotal: number = 0

  constructor() { }

  addCheckoutCartItems(itemsArr: any, subtotal: number) {
    this.checkoutData.checkoutCartItemsArr = itemsArr
    this.checkoutData.subtotal = subtotal
  }

  getCheckoutData() {
    return this.checkoutData
  }
}
