import { Component, OnInit } from '@angular/core';

// services
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  productCategoriesArray: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProductsCategories();
  }

  fetchProductsCategories() {
    this.productService.productCategories().subscribe(
      (response) => {
        this.productCategoriesArray = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
