import {
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Location } from '@angular/common';

import { fadeOutLeftOnLeaveAnimation } from 'angular-animations'

import { NavComponent } from '../../components/nav/nav.component';

// services
import { CartService } from '../../shared/services/cart.service';
import { OrdersService } from '../../shared/services/orders.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss'],
  animations: [
    fadeOutLeftOnLeaveAnimation()
  ]
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
  isAllItemSelected: boolean = false;
  allSelectedCheck: any;
  subTotal: number = 0;

  @ViewChild(NavComponent, { static: true }) navCompo: NavComponent;

  constructor(
    public router: Router,
    private toast: HotToastService,
    private location: Location,
    private cartService: CartService,
    private orderService: OrdersService,
    private cdr: ChangeDetectorRef
  ) {}

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems() {
    // clean up the cartArray
    this.cartArray = [];

    // call the cartItemsCount method from nav component to refresh the indicator - to sync with the changes
    this.navCompo.cartItemsCount();

    this.cartService.getCartItems().subscribe(
      (response: any) => {
        response.length == 0
          ? (this.isCartEmpty = true)
          : (this.isCartEmpty = false);

        // store carts to cartArray to be use in the template
        this.cartArray = response;

        // clear the selectedCartItems - so that the calculations will not throw a conflict
        this.selectedCartItems = [];
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // checkout button
  checkoutOrder() {
    // check if selectedCartItems has items - if not reject the action and return an toast notification
    if (this.selectedCartItems.length == 0) {
      this.toast.info('Please select items', { position: 'top-right' });
    } else {
      // pass checkoutitems data to order service, to use in the checkout page
      this.orderService.addCheckoutCartItems(
        this.selectedCartItems,
        this.subTotal
      );
      this.router.navigate(['/checkout/']);
    }
  }

  // this function is the responsible for incrementing and decrementing the cart items
  // op: means the action, whether it is increment or decrement
  // cartId: this is needed for comparing when selecting the right cart item
  // qty: this is the cart item quantity
  // productAvailQty: this is the number of stocks of the product
  incDecCartItemQty(op: any, cartId: any, qty: any, productAvailQty?: any) {

    // check if op is not a increment which means, it is decrement 
    // also check if the current cart qty is equal to 1, if it is, and that means that the cart item will be removed,  because 0 cart qty is dont have a place on the cart
    if (op != 1 && qty == 1) {

      // call the method removeCartItem and pass the cartId of the cart item you want to remove
      this.removeCartItem(cartId);
    } else {
      
      // 1 means increment
      if (op == 1) {

        // check if the cart qty reached the product stocks - throw a notification if yes
        if (qty >= productAvailQty) {
          this.toast.success('Product available quantity reached!', {
            position: 'top-right',
            duration: 2000,
          });
        } else {

          // map thru cartArray and increase the cart item qty based on the cart id
          this.cartArray.map((item: any) =>
            cartId == item.id ? item.quantity++ : ''
          );

          // update the selectedCartItems array because this array is the one that will be passed to the checkout page
          // sync the data based on the selected items in the cart
          this.selectedCartItems.map((item: any) => {
            if (cartId == item.cartId) {
              item.quantity++;

              // call the calculateSubTotal method to update the subtotal based on the changes
              this.calculateSubTotal();
            }
          });

          // increase the cart qty on the server based on the passed cart id
          this.cartService.increaseQtyCartItem({ cartId: cartId }).subscribe(
            (response) => {},
            (error) => console.log(error)
          );
        }
      } else {
        // decrease cart qty
        this.cartArray.map((item: any) =>
          cartId == item.id ? item.quantity-- : ''
        );

        // also decrease the cartqty of the selectedCartItem arr to sync with the selected items
        this.selectedCartItems.map((item: any) => {
          if (cartId == item.cartId) {
            item.quantity--;

            // call this function to sync with the calculations
            this.calculateSubTotal();
          }
        });

        // decrease the cart qty on the server based on the passed cart id
        this.cartService.reduceQtyCartItem({ cartId: cartId }).subscribe(
          (response) => {},
          (error) => console.log(error)
        );
      }
    }
  }

  // remove cart item based on the passed cart id
  removeCartItem(cart_id: any) {
    this.cartService.removeCartItem(cart_id).subscribe(
      (response: any) => {
        this.toast.success(response.message, {
          position: 'top-right',
          duration: 2000,
        });

        // if the operation is success then reload the cart and recieve the fresh data from the server
        this.loadCartItems();

        // remove the checked on the allItemsSelect checkbox
        this.allSelectedCheck = '';

        // if the specific item is removed from the cart - you should also removed it in the selectedCartItems arr
        // using the filter func - to remove the removed cart item in the arr if the item is in.
        this.selectedCartItems = this.selectedCartItems.filter(
          (item: any) => item.cartId !== cart_id
        );

        // calculate subtotal to sync with the changes
        this.calculateSubTotal();
      },
      (error) => console.log(error)
    );
  }

  // check if cart item is already selected
  checkItemIfSelected(productId: any) {
    return this.selectedCartItems.some((item: any) => {
      return item.productId == productId;
    });
  }

  // this method will select the cart item
  selectProductToCheckout(cartItemId: any) {

    // map thru cartArray and checked the checkbox of the items whose not checked yet
    this.cartArray.map(async (cartItem: any) => {
      if (cartItem.id == cartItemId) {
        cartItem.isCheck = cartItem.isCheck ? '' : 'checked';

        // check if cart item is not on the selectedCartItems arr yet, if not then push it in
        if (!this.checkItemIfSelected(cartItem.ProductId)) {
          this.selectedCartItems.push({
            cartId: cartItem.id,
            produtName: cartItem.Product.product_name,
            productImg: cartItem.Product.product_image,
            productId: cartItem.ProductId,
            quantity: cartItem.quantity,
            price: cartItem.Product.product_price,
          });
        } else {
          // if already in there, then remove it thru filter
          this.selectedCartItems = this.selectedCartItems.filter(
            (item: any) => item.productId !== cartItem.ProductId
          );

          // remove the check of the cart item chcckbox
          this.allSelectedCheck = '';
        }

        // check if the length of the cartArr and selectedCartItems arr are the same
        // if yes then it means that all the cart items are selected, so enable the all selected items checkbox
        this.selectedCartItems.length == this.cartArray.length
          ? (this.allSelectedCheck = 'checked')
          : (this.allSelectedCheck = '');
      }
    });

    // calculate the subtotal to sync it with the selectedCartItems arr data
    this.calculateSubTotal();
  }

  // this method will select all the cart items
  async selectAllCartItems() {
    // if all cart items are already selected, then unselect them all haha
    // if not then store them all to the selectedCartItems arr
    if (this.selectedCartItems.length != this.cartArray.length) {
      await this.cartArray.map((item: any) => {
        if (!this.checkItemIfSelected(item.ProductId)) {
          item.isCheck = item.isCheck ? '' : 'checked';

          this.selectedCartItems.push({
            cartId: item.id,
            produtName: item.Product.product_name,
            productImg: item.Product.product_image,
            productId: item.ProductId,
            quantity: item.quantity,
            price: item.Product.product_price,
          });
        }
      });

      // calculate the subtotal to sync it with the selectedCartItems arr data
      this.calculateSubTotal();
    } else {

      // unselect all of the selected items
      this.selectedCartItems = [];
      this.cartArray.map((item: any) => {
        item.isCheck = '';
      });

      this.subTotal = 0;
    }
  }

  // calculate subtotal
  calculateSubTotal() {
    this.subTotal = 0;

    this.selectedCartItems.map((cartItem: any) => {
      this.subTotal += cartItem.quantity * cartItem.price;
    });
  }

  // this will track the ngFor, so that it will not rerender all the items, but only the changes
  trackByFn(index: any, item: any) {
    return item.id;
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
