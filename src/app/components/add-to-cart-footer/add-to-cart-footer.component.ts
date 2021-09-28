import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-footer',
  templateUrl: './add-to-cart-footer.component.html',
  styleUrls: ['./add-to-cart-footer.component.scss']
})
export class AddToCartFooterComponent implements OnInit {
  @Input() totalPrice:number = 0;
  @Input() all:number = 0;
  @Input() productArray:any=[];
  @Input() isAll:boolean=false;

  constructor() { 
    
  }

  ngOnInit(): void {
    
  }

  
  clickAll(){
    this.isAll=!this.isAll
    if(this.isAll){
      this.productArray.map((product:any)=>{
        this.totalPrice+=product.price
        console.log(product.price)
      }) 
      this.all = this.productArray.length
    }else{
      this.totalPrice=0
      this.all = 0
    }
  }

}
