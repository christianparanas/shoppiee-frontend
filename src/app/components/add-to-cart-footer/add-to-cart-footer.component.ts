import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

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
  @Output() clickedAll = new EventEmitter();

  constructor() {
    
  }
  
  ngOnInit(): void {
    //every 2s the system will check each checkbox if it`s check the price will show
    setInterval(()=>{
      this.all=0
      this.totalPrice=0
      this.productArray.map((product:any)=>{
          if(product.isCheck=='checked'){
            this.all+=1
            if(this.all!=0) {this.totalPrice+=(product.quantity*product.price)}
          }
        })
      },2000)
  }
  
  // select all checkbox it either uncheck or check
  clickAll(){
    this.isAll=!this.isAll
    this.clickedAll.emit(this.isAll)
  }

}
