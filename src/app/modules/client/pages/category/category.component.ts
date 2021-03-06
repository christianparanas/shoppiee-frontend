import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// services
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  isImgLoaded: boolean = false;
  categoryProductsArray: any = [];
  category: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('id');
    this.fetchCategoryProducts();
  }

  detectErroImg(e: any): void {
    console.log('error');
  }

  imgIsLoaded(): void {
    console.log('loaded');
  }

  fetchCategoryProducts() {
    this.productService.getCategoryProducts(this.category).subscribe(
      (response) => {
        console.log(response);
        this.categoryProductsArray = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
