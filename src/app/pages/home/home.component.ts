import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  newProductsArr = new Array(7)
  topProductsArr = new Array(7)
  discoverProductsArr = new Array(22)

  constructor() { }

  ngOnInit(): void {
  }

}