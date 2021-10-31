import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// services
import { ProductsService } from '../../shared/services/products.service';

export interface UserData {
  id: string;
  image: string;
  name: string;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ bottom: '-1000px', opacity: 1 }),
        animate('.3s ease', style({ bottom: 0, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ bottom: 0, opacity: 1 }),
        animate('.3s ease', style({ bottom: '-1000px', opacity: 1 })),
      ]),
    ]),
  ],
})
export class ProductsComponent implements AfterViewInit, OnInit {
  isAddProductModalOpen: boolean = true;
  displayedColumns: string[] = ['id', 'image', 'name', 'storeID', 'stock'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productsService: ProductsService) {
    this.fetchProducts();
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  openCloseNewProductModal() {
    this.isAddProductModalOpen = !this.isAddProductModalOpen;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fetchProducts() {
    this.productsService.fetchProducts().subscribe(
      (response) => {
        this.dataSource = new MatTableDataSource(response);

        // init the paginator ang sorter after the dataSource is set
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
