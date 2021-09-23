import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  newProductsArr = new Array(7);
  topProductsArr = new Array(7);
  discoverProductsArr = new Array(22);

  constructor() {}

  ngOnInit(): void {
    Aos.init({
      once: true, // whether animation should happen only once - );
    });
  }
}
