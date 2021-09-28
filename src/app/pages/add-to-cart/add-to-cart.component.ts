import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input() productArray:any=[]
  @Input() all:number=0;

  constructor() { 
  }

  ngOnInit(): void {
    this.productArray=[
    {id:1,quantity:0,price:200,storeName:'Paranas',productName:'knife'},
    {id:2,quantity:0,price:255,storeName:'Baldo',productName:'axe'},
    {id:3,quantity:0,price:244,storeName:'Loreno',productName:'sword'},
    {id:4,quantity:0,price:233,storeName:'Lebasora',productName:'water gun'},
    {id:5,quantity:0,price:222,storeName:'Shoppiee',productName:'cell phone'},
    {id:6,quantity:0,price:211,storeName:'angular',productName:'bags'}]
    this.all = this.productArray.length
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
