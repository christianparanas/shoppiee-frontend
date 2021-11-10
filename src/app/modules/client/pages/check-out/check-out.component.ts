import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import * as moment from 'moment';

import { ProfileService } from '../../shared/services/profile.service'
import { OrdersService } from '../../shared/services/orders.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  isShipModalOpen: boolean = false
  bgOverlayOpen: boolean = false
  shippingOption: any = {
    name: "Entrego",
    price: 115,
    isSelected: true
  }

  rippleColor: string = 'rgb(255, 92, 0, 0.2)';
  currentDate: any
  expectedDeliveredDate: any = {
    start: null,
    end: null
  }

  onScroll: boolean = false;
  orderDataArr: any;
  itemsArr: any = [];
  totalPayment: number = 0;
  isDataLoaded: boolean = false;
  userData: any = []

  @Input() all: number;
  @Input() subTotal: number = 0;
  @Input() name: string = 'Cardo Never Die';
  @Input() phoneNumber: string = '09123456789';
  @Input() address: string = 'Brgy 69 - Di matagpuan kasi Iniwan, Nowhere.city';
  @Input() productArray: any = [
    { id: 1, name: 'Mia Khalifa', Price: 100, amount: 2 },
    { id: 2, name: 'Jhonny Sin', Price: 201, amount: 4 },
    { id: 3, name: 'No bodyCares', Price: 232, amount: 1 },
    { id: 4, name: 'Bawal Utang', Price: 300, amount: 3 },
    { id: 5, name: 'Black Market', Price: 5999, amount: 1 },
    { id: 6, name: 'Love Lang', Price: 100, amount: 2 },
  ];

  constructor(
    private location: Location,
    private orderService: OrdersService,
    private router: Router,
    private profileService: ProfileService
  ) {
    let tempoTotal = 0;
    this.productArray.map((product: any) => {
      tempoTotal += product.Price * product.amount;
    });
    this.subTotal = tempoTotal;
  }

  async ngOnInit() {
    window.addEventListener('scroll', this.listenScrollEvent);

    await this.loadCheckoutData();
    // this.redirectIfNoCheckoutItems();

    await this.loadUserData()

    // generate current date
    this.currentDate =  new Date().toLocaleString()
    this.expectedDeliveredDate.start = moment().add(10, 'days').format("MMM DD"); 
    this.expectedDeliveredDate.end = moment().add(17, 'days').format("MMM DD")
  }

  async loadCheckoutData() {
    // store checkout data
    this.orderDataArr = await this.orderService.getCheckoutData();
    console.log(this.orderDataArr)

    // store cart items
    this.itemsArr = await this.orderDataArr.checkoutCartItemsArr;

    // store subtotal from cart
    this.totalPayment = this.orderDataArr.subtotal;
  }

  loadUserData() {
    this.profileService.getProfileData().subscribe(
      (response: any) => {
        console.log(response)
        this.userData = response
      }, 
      (error) => console.log(error)
    )
  }

  // check if user, checkout his/her cart, if not redirect to cart
  redirectIfNoCheckoutItems() {
    if (this.orderDataArr.checkoutCartItemsArr.length == 0) {
      this.router.navigate(['/cart/']);
    }
  }

  listenScrollEvent = () => {
    window.scrollY > 15 ? (this.onScroll = true) : (this.onScroll = false);
  };

  goBack() {
    this.location.back();
  }

  openCloseShipModal() {
    this.isShipModalOpen =! this.isShipModalOpen
    this.bgOverlayOpen =! this.bgOverlayOpen
  }

  changeShipOption(op: any) {

    if(op == 1) {
      this.shippingOption.name = "Entrego"
      this.shippingOption.price = 115
    }
    else {
      this.shippingOption.name = "J&T Express"
      this.shippingOption.price = 120
    }
  }
 }
