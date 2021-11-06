import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Location } from '@angular/common';

// services
import { CartService } from '../../shared/services/cart.service'

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  isCartEmpty: boolean = false
  productArray: any = [];
  @Input() temporary: any = [];
  @Input() all: number = 0;
  @Input() AllItemQuantity: number = 0;
  @Input() totalPrice: number = 0;
  @Input() isAll: boolean = false;
  @Input() isMaxQty: boolean = false;

  constructor(
    public router: Router,
    private toast: HotToastService,
    private location: Location,
    private cartService: CartService
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.loadCartItems()
  }

  loadCartItems() {
    this.cartService.getCartItems().subscribe(
      (response: any) => {
        response.length == 0 ? this.isCartEmpty = true : this.isCartEmpty = false
        this.productArray = response
      },
      (error) => {
        console.log(error)
      }
    )
  }

  incDecCartItemQty(op: any, cartId: any) {
    if(op == 1) {
      this.cartService.increaseQtyCartItem({
        cartId: cartId
      }).subscribe(
        (response: any) => {
          console.log(response)
          // refetch cart items
        this.loadCartItems()
        },
        (error) => {
          console.log(error)
        }
      )
    }
    else {
      this.cartService.reduceQtyCartItem({
        cartId: cartId
      }).subscribe(
        (response: any) => {
          console.log(response)
          // refetch cart items
        this.loadCartItems()
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  removeCartItem(cart_id: any) {
    this.cartService.removeCartItem(cart_id).subscribe(
      (response: any) => {
        this.toast.success(response.message, { position: 'top-right' });

        // refetch cart items
        this.loadCartItems()
      },
      (error) => {
        console.log(error)
      }
    )
  }

  //product quantity control
  itemQuantity(qtyControl: number, id: number) {
    return this.productArray.map((product: any) => {
      if (product.id == id) {
        //if product reach the maximum available item it will stop the quantityControl in increasing
        if (product.qtyAvailable > product.quantity) {
          //increase and decrease if the quantity is not equal to -1
          if (product.quantity + qtyControl == -1) product.quantity = 1;
          //show delete-message if product hits value of zero
          else if (product.quantity + qtyControl == 0) {
            this.hideNotification(product.id);
            product.quantity = 2; // since the next code is going to decrease it.
          }
          product.quantity += qtyControl;
        }
        //only accept decrement qtyControl if product is already max
        else if (product.quantity == product.qtyAvailable && qtyControl == -1)
          product.quantity -= 1;
        else this.ok();
      }
      this.showTransaction();
    });
  }

  //check only the specific product using id
  check(id: number) {
    return this.productArray.map((product: any) => {
      if (product.id == id) {
        product.isCheck = product.isCheck ? '' : 'checked';
        this.showTransaction();
      }
    });
  }
  
  // if the btn select all is check every product will be uncheck
  clickAll() {
    this.isAll = !this.isAll;
    return this.productArray.map((product: any) => {
      product.isCheck = this.isAll ? 'checked' : '';
      this.showTransaction();
    });
  }

  //show the transaction details
  showTransaction() {
    this.all = 0;
    this.AllItemQuantity = 0;
    this.totalPrice = 0;
    this.productArray.map((product: any) => {
      if (product.isCheck === 'checked') {
        this.all += 1;
        if (this.all != 0) {
          this.totalPrice += product.quantity * product.price;
          this.AllItemQuantity += product.quantity;
        }
      }
    });
  }

  delete(id: number) {
    this.temporary = [];
    return this.productArray.filter((product: any) => {
      if (product.id != id) this.temporary.push(product);
      this.productArray = this.temporary;
      this.showTransaction();
    });
  }

  hideNotification(id: number) {
    this.productArray.map((product: any) => {
      if (product.id == id) product.notify = !product.notify;
    });
  }

  ok() {
    this.isMaxQty = !this.isMaxQty;
  }
}
