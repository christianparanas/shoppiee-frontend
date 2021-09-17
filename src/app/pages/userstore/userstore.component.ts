import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userstore',
  templateUrl: './userstore.component.html',
  styleUrls: ['./userstore.component.scss']
})
export class UserstoreComponent implements OnInit {
  
  discoverProductsArr = new Array(11)
  
  constructor() { }

  ngOnInit(): void {
  }

}
