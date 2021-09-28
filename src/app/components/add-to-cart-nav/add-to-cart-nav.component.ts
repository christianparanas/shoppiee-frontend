import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-to-cart-nav',
  templateUrl: './add-to-cart-nav.component.html',
  styleUrls: ['./add-to-cart-nav.component.scss']
})
export class AddToCartNavComponent implements OnInit {
  @Input() all:number;
  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }
  
}
