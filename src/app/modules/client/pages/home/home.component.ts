import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

// services
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  discoverProductsArray: any = new Array(11);
  topProductsArray: any = new Array(7);
  newProductsArray: any = new Array(7);

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    Aos.init({
      once: true, // whether animation should happen only once - );
    });

    this.fetchTopProducts();
    this.fetchNewProducts();
    this.fetchDiscoverProducts();
  }


  fetchDiscoverProducts() {
    this.productService.discoverProducts().subscribe(
      (response) => {
        this.discoverProductsArray = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchTopProducts() {
    this.productService.topProducts().subscribe(
      (response) => {
        this.topProductsArray = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  fetchNewProducts() {
    this.productService.newProducts().subscribe(
      (response) => {
        this.newProductsArray = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
