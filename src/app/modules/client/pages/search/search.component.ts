import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HotToastService } from '@ngneat/hot-toast';

// services
import { ProductService } from '../../shared/services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchInput: String;
  hasResult: boolean = false;
  searchResult: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    // get query 
    this.route.queryParamMap.subscribe(
      (params: any) => (this.searchInput = params.params.keyword)
    );

    this.fetchQueryResult();
  }

  fetchQueryResult() {
    this.productService.searchProduct(this.searchInput).subscribe(
      (response: any) => {
        this.searchResult = response
        if(this.searchResult == []) {
          this.hasResult = false
        }
        else {
          this.hasResult = true
        }

      },
      (error: any) => {
        this.toast.error(error.message, { position: 'top-right' });
      }
    )
  }
}
