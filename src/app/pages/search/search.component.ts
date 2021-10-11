import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  storesResultArray = new Array(7);
  productsResultArray = new Array(11);

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    // get query params
    this.route.queryParamMap.subscribe(
      (params: any) => (this.searchInput = params.params.keyword)
    );

    
    this.checkifhasresult()
  }

  fetchSearchProductsResult() {
    this.productService.simillarProducts().subscribe(
      (response) => {
        this.productsResultArray = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  checkifhasresult() {
    if(this.searchInput == "Chan") {
      this.hasResult = true
      this.fetchSearchProductsResult()
    } else {
      this.hasResult = false
    }
  }
}
