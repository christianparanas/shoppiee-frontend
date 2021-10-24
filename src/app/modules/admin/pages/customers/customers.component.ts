import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// services
import { ProductsService } from '../../shared/services/products.service';

export interface UserData {
  id: string;
  image: string;
  name: string;
  address: string;
  role: string;
}

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'image', 'name', 'address', 'role'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private productsService: ProductsService) {
    const users = [
      {
        id: '1',
        image: 'https://avatars.githubusercontent.com/u/59472122?v=4',
        name: 'Thea Thea',
        address: 'Brgy Tibay',
        role: 'Customer',
      },
      {
        id: '1',
        image: 'https://avatars.githubusercontent.com/u/59472122?v=4',
        name: 'Chan Chan',
        address: 'Brgy Tibay',
        role: 'Admin',
      },
      {
        id: '1',
        image: 'https://avatars.githubusercontent.com/u/59472122?v=4',
        name: 'Thea Thea',
        address: 'Brgy Tibay',
        role: 'Customer',
      },
      {
        id: '1',
        image: 'https://avatars.githubusercontent.com/u/59472122?v=4',
        name: 'Thea Thea',
        address: 'Brgy Tibay',
        role: 'Customer',
      },
      {
        id: '1',
        image: 'https://avatars.githubusercontent.com/u/59472122?v=4',
        name: 'Thea Thea',
        address: 'Brgy Tibay',
        role: 'Customer',
      },
      {
        id: '1',
        image: 'https://avatars.githubusercontent.com/u/59472122?v=4',
        name: 'Thea Thea',
        address: 'Brgy Tibay',
        role: 'Customer',
      },
    ];

    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
