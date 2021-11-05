import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

// vendor
import { HotToastService } from '@ngneat/hot-toast';

// services
import { AuthService } from '../../shared/services/auth.service';
import { ProductService } from '../../shared/services/product.service';
import { CartService } from '../../shared/services/cart.service';
import { NavComponent } from '../../components/nav/nav.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  simillarProductsArray = new Array(11);
  productArray: any = [];
  productId: any;
  quantity: number = 0;
  isImgLoaded: boolean = false;
  isSubmitted: boolean = false

  @ViewChild(NavComponent, {static : true}) navCompo : NavComponent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService,
    private authService: AuthService,
    private cartService: CartService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.fetchSimillarProducts();
    this.refetch();
  }

  addToCart() {
    if (this.authService.isLoggedIn()) {
      this.isSubmitted = true

      this.cartService
        .addToCart({
          product_id: this.productArray.id,
          product_quantity: 1,
        })
        .subscribe(
          (response: any) => {
            this.toast.success(response.message, { position: 'top-right' });
            this.isSubmitted = false 
            this.navCompo.cartItemsCount()         
          },
          (error) => {
            this.isSubmitted = false
            if(error.status == 403) this.toast.info(error.error.message, { position: 'top-right' });
          }
        );
    }
    else {
      this.toast.info("Please login first!", { position: 'top-right' });
      this.router.navigate(['/account/login']);
    }
  }

  refetch() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.fetchProduct();
  }

  goBack(): void {
    this.location.back();
  }

  detectErroImg(e: any): void {
    console.log('error');
  }

  imgIsLoaded(): void {
    this.isImgLoaded = true;
  }

  itemQuantity(event: number) {
    if (this.quantity + event == -1) this.quantity = 0;
    else this.quantity += event;
  }

  fetchProduct() {
    this.productService.fetchSpecificProduct(this.productId).subscribe(
      (response) => {
        this.productArray = response;
        console.log(this.productArray);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchSimillarProducts() {
    this.productService.simillarProducts().subscribe(
      (response) => {
        this.simillarProductsArray = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
