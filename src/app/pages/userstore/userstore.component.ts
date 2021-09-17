import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstore',
  templateUrl: './userstore.component.html',
  styleUrls: ['./userstore.component.scss']
})
export class UserstoreComponent implements OnInit {
  newProductsArr = new Array(7)
  topProductsArr = new Array(7)
  discoverProductsArr = new Array(22)
  
  constructor() { }

  ngOnInit(): void {
  }

}
