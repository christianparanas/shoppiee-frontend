import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// services
import { UsersService } from "../../shared/services/users.service"

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

  constructor(private usersService: UsersService) {
    this.fetchUsers()
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  fetchUsers() {
    this.usersService.getUsers().subscribe(
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
