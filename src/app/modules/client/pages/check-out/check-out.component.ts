import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { OrdersService } from '../../shared/services/orders.service';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  rippleColor: string = "rgb(255, 92, 0, 0.2)"
  onScroll: boolean = false;
  orderDataArr: any

  @Input() all:number
  @Input() subTotal:number=0;
  @Input() name:string='Cardo Never Die'
  @Input() phoneNumber:string='09123456789'
  @Input() address:string='Brgy 69 - Di matagpuan kasi Iniwan, Nowhere.city'
  @Input() productArray:any=[
    {id:1,name:'Mia Khalifa',Price:100,amount:2},
    {id:2,name:'Jhonny Sin',Price:201,amount:4},
    {id:3,name:'No bodyCares',Price:232,amount:1},
    {id:4,name:'Bawal Utang',Price:300,amount:3},
    {id:5,name:'Black Market',Price:5999,amount:1},
    {id:6,name:'Love Lang',Price:100,amount:2},
  ]

  constructor(private location: Location, private orderService: OrdersService, private router: Router) {
    let tempoTotal=0;
    this.productArray.map((product:any)=>{
      tempoTotal+=product.Price*product.amount;
    })
    this.subTotal=tempoTotal
  }

  async ngOnInit() {
    window.addEventListener('scroll', this.listenScrollEvent);

    await this.loadCheckoutData()
    this.redirectIfNoCheckoutItems()
  }

  async loadCheckoutData() {
    console.log(this.orderService.getCheckoutData())
    this.orderDataArr = await this.orderService.getCheckoutData()
  }

  redirectIfNoCheckoutItems() {
    if(this.orderDataArr.checkoutCartItemsArr.length == 0) {
      this.router.navigate(['/cart/']);
    }
  }

  listenScrollEvent = () => {
    window.scrollY > 15 ? (this.onScroll = true) : (this.onScroll = false);
  };

  goBack() {
    this.location.back();
  }

}
