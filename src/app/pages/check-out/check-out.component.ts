import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  rippleColor: string = "rgb(255, 92, 0, 0.2)"
  onScroll: boolean = false;
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

  constructor(private location: Location,) {
    let tempoTotal=0;
    this.productArray.map((product:any)=>{
      tempoTotal+=product.Price*product.amount;
    })
    this.subTotal=tempoTotal
  }

  ngOnInit(): void {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {
    window.scrollY > 15 ? (this.onScroll = true) : (this.onScroll = false);
  };

  goBack() {
    this.location.back();
  }

}
