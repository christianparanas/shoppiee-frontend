import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-again',
  templateUrl: './buy-again.component.html',
  styleUrls: ['./buy-again.component.scss']
})
export class BuyAgainComponent implements OnInit {
  productArray=new Array(10)
  constructor() { }

  ngOnInit(): void {
  }

}
