import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// services
import { OrdersService } from "../../shared/services/orders.service"

 @Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'totalPayment', 'shippingCourier', 'paymentMethod', 'buyerId', 'status', 'options'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private ordersService: OrdersService) {
    this.fetchOrders()
  }

  ngOnInit() {}

  ngAfterViewInit() {
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fetchOrders() {
    this.ordersService.getOrders().subscribe(
      (response) => {
        console.log(response)

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
