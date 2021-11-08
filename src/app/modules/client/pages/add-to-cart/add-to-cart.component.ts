import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Location } from '@angular/common';

import { NavComponent } from '../../components/nav/nav.component';

// services
import { CartService } from '../../shared/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
})
export class AddToCartComponent implements OnInit {
  temporary: any = [];
  all: number = 0;
  AllItemQuantity: number = 0;
  totalPrice: number = 0;
  isAll: boolean = false;
  isMaxQty: boolean = false;

  isCartEmpty: boolean = false;
  cartArray: any = [];
  selectedCartItems: any = [];
  isAllItemSelected: boolean = false
  allSelectedCheck: any
  subTotal: number = 0

  @ViewChild(NavComponent, { static: true }) navCompo: NavComponent;

  constructor(
    public router: Router,
    private toast: HotToastService,
    private location: Location,
    private cartService: CartService,
    private cdr: ChangeDetectorRef,
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartArray = []
    this.navCompo.cartItemsCount();

    this.cartService.getCartItems().subscribe(
      (response: any) => {
        response.length == 0
          ? (this.isCartEmpty = true)
          : (this.isCartEmpty = false);
        this.cartArray = response;
        this.selectedCartItems = []
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkoutOrder() {}

  incDecCartItemQty(op: any, cartId: any, qty: any, productAvailQty?: any) {

    if (op != 1 && qty == 1) {
      this.removeCartItem(cartId);
    } else {
      if (op == 1) {
        if (qty >= productAvailQty) {
          this.toast.success('Product available quantity reached!', {
            position: 'top-right',
            duration: 2000,
          });
        } else {
          this.cartService
            .increaseQtyCartItem({
              cartId: cartId,
            })
            .subscribe(
              (response: any) => {
                this.cartArray.map((item: any) => {
                  if(item.id == cartId) {
                    item.quantity = response.quantity
                    this.cdr.detectChanges();
                  } 
                })
                
              },
              (error) => {
                console.log(error);
              }
            );
        }
      } else {
        this.cartService
          .reduceQtyCartItem({
            cartId: cartId,
          })
          .subscribe(
            (response: any) => {
              this.cartArray.map((item: any) => {
                if(item.id == cartId) {
                  item.quantity = response.quantity
                  this.cdr.detectChanges();
                } 
              })
            },
            (error) => {
              console.log(error);
            }
          );
      }
    }

    this.subTotal = 0
    this.allSelectedCheck = ""
  }

  removeCartItem(cart_id: any) {
    this.cartService.removeCartItem(cart_id).subscribe(
      (response: any) => {
        this.toast.success(response.message, {
          position: 'top-right',
          duration: 2000,
        });

        // refetch cart items
        this.loadCartItems();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkItemIfSelected(productId: any) {
    return this.selectedCartItems.some((item: any) => {
      return item.productId == productId;
    });
  }

  selectProductToCheckout(cartItemId: any) {
    this.cartArray.map(async (cartItem: any) => {
      if (cartItem.id == cartItemId) {
        cartItem.isCheck = cartItem.isCheck ? '' : 'checked';

        if (!this.checkItemIfSelected(cartItem.ProductId)) {
          this.selectedCartItems.push({
            productId: cartItem.ProductId,
            quantity: cartItem.quantity,
            price: cartItem.Product.product_price
          });
        } else {
          this.selectedCartItems = this.selectedCartItems.filter(
            (item: any) => item.productId !== cartItem.ProductId
          );
          this.allSelectedCheck = ""
        }

        this.selectedCartItems.length == this.cartArray.length ? this.allSelectedCheck = "checked" : this.allSelectedCheck = ""
      }
    });

    this.calculateSubTotal()
  }

  async selectAllCartItems() {
    if(this.selectedCartItems.length != this.cartArray.length) {

      await this.cartArray.map((item: any) => {
        if(!this.checkItemIfSelected(item.ProductId)) {
          item.isCheck = item.isCheck ? '' : 'checked';
  
          this.selectedCartItems.push({
            productId: item.ProductId,
            quantity: item.quantity,
            price: item.Product.product_price
          })
        }
      })

      this.calculateSubTotal()
    }
    else {
      this.selectedCartItems = []
      this.cartArray.map((item: any) => {
        item.isCheck = ""
      })

      this.subTotal = 0
    }
  }
  
  calculateSubTotal() {
    this.subTotal = 0

    this.selectedCartItems.map((cartItem: any) => {
      this.subTotal += cartItem.quantity * cartItem.price
    })
  }

  //show the transaction details
  showTransaction() {
    this.all = 0;
    this.AllItemQuantity = 0;
    this.totalPrice = 0;
    this.cartArray.map((product: any) => {
      if (product.isCheck === 'checked') {
        this.all += 1;
        if (this.all != 0) {
          this.totalPrice += product.quantity * product.Product.product_price;
          this.AllItemQuantity += product.quantity;
        }
      }
    });
  }

  //product quantity control
  itemQuantity(qtyControl: any, id: any) {
    return this.cartArray.map((product: any) => {
      if (product.id == id) {
        //if product reach the maximum available item it will stop the quantityControl in increasing
        if (product.Product.product_quantity > product.quantity) {
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
        else this.showMaxQtyReachedModal();
      }
      this.showTransaction();
    });
  }

  //check only the specific product using id
  check(id: number) {
    return this.cartArray.map((product: any) => {
      if (product.id == id) {
        product.isCheck = product.isCheck ? '' : 'checked';
        this.showTransaction();
      }
    });
  }

  // if the btn select all is check every product will be uncheck
  clickAll() {
    this.isAll = !this.isAll;
    return this.cartArray.map((product: any) => {
      product.isCheck = this.isAll ? 'checked' : '';
      this.showTransaction();
    });
  }


  hideNotification(id: number) {
    this.cartArray.map((product: any) => {
      if (product.id == id) product.notify = !product.notify;
    });
  }

  showMaxQtyReachedModal() {
    this.isMaxQty = !this.isMaxQty;
  }
}
