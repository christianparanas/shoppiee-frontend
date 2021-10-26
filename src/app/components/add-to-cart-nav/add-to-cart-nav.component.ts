import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-to-cart-nav',
  templateUrl: './add-to-cart-nav.component.html',
  styleUrls: ['./add-to-cart-nav.component.scss']
})
export class AddToCartNavComponent implements OnInit {
  @Input() currentRouter:string;
  onScroll: boolean = false;

  constructor(private location: Location) { }

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
