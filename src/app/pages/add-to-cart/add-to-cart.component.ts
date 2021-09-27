import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input() quantity:number=0
  @Input() shopName:string='Black market'
  @Input() productName:string='hello world'
  productArray= new Array(10)

  constructor() { }

  ngOnInit(): void {
  }

  itemQuantity(event: number) {
    if (this.quantity + event == -1) this.quantity = 0;
    else this.quantity += event;
  }

}
