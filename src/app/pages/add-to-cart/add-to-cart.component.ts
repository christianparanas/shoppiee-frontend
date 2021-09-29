import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  @Input() productArray:any=[]
  @Input() all:number=0
  @Input() allHeader:number=0
  @Input() AllItemQuantity:number=0
  @Input() totalPrice:number = 0;
  @Input() isAll:boolean=false;


  constructor() { 
  }

  ngOnInit(): void {
    this.productArray=[
    {id:1,quantity:0,qtyAvailable:11,isCheck:'',price:200,storeName:'Paranas',productName:'knife'},
    {id:2,quantity:0,qtyAvailable:11,isCheck:'',price:255,storeName:'Baldo',productName:'axe'},
    {id:3,quantity:0,qtyAvailable:11,isCheck:'',price:244,storeName:'Loreno',productName:'sword'},
    {id:4,quantity:0,qtyAvailable:11,isCheck:'',price:233,storeName:'Lebasora',productName:'water gun'},
    {id:5,quantity:0,qtyAvailable:11,isCheck:'',price:222,storeName:'Shoppiee',productName:'cell phone'},
    {id:6,quantity:0,qtyAvailable:11,isCheck:'',price:211,storeName:'angular',productName:'bags'}]
    this.allHeader = this.productArray.length
  }

  //product quantity control
  itemQuantity(qtyControl: number,id:number) {
      return this.productArray.map((product:any)=>{
        if(product.id==id){
          //if product reach the maximum available item it will stop the quantityControl in increasing
            if(product.qtyAvailable>product.quantity){
              //increase and decrease if the quantity is not equal to -1 
              if (product.quantity + qtyControl == -1) product.quantity = 0;
              else product.quantity += qtyControl;
              this.showTransaction();
            }
        }
      })
  }
  //check only the specific product using id
  check(id:number){
    return this.productArray.map((product:any)=>{
      if(product.id == id ){ 
        product.isCheck= product.isCheck ? '' : 'checked'
        this.showTransaction();
      }
    })
  }
  // if the btn select all is check every product will be uncheck
  clickAll(){
    this.isAll=!this.isAll
    return this.productArray.map((product:any)=>{
      product.isCheck= this.isAll ? 'checked' : ''
      this.showTransaction();
    })
  }

  //show the transaction details
  showTransaction(){
      this.all=0
      this.AllItemQuantity=0
      this.totalPrice=0
      this.productArray.map((product:any)=>{
          if(product.isCheck=='checked'){
            this.all+=1
            if(this.all!=0) {
              this.totalPrice+=(product.quantity*product.price)
              this.AllItemQuantity+=product.quantity
            }
          }
        }
      )
  }
}
