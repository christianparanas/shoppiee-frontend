import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// services
import { ProductService } from '../../shared/services/product.service';

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

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.fetchSimillarProducts()
    this.productId = this.route.snapshot.paramMap.get('id')
    this.fetchProduct()
  }

  goBack(): void {
    this.location.back();
  }

  itemQuantity(event: number) {
    if (this.quantity + event == -1) this.quantity = 0;
    else this.quantity += event;
  }

  fetchProduct() {
    this.productService.fetchSpecificProduct(this.productId).subscribe(
      (response) => {
        this.productArray = response;
        console.log(this.productArray)
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
