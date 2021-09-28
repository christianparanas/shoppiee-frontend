import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input() shopName:string='Black market'
  @Input() productName:string='hello world'
  @Input() productArray:any=[]

  constructor() { 
  }

  ngOnInit(): void {
    this.productArray=[
    {id:1,quantity:0},
    {id:2,quantity:0},
    {id:3,quantity:0},
    {id:4,quantity:0},
    {id:5,quantity:0},
    {id:6,quantity:0},]
  }

  itemQuantity(qtyControl: number,id:number) {
      return this.productArray.map((product:any)=>{
        if(product.id==id){
          if (product.quantity + qtyControl == -1) product.quantity = 0;
          else product.quantity += qtyControl;
        }
      })
  }

}
