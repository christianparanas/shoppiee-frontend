import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ right: '-100px', opacity: 1 }),
        animate('.3s ease', style({ right: 0, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ right: 0, opacity: 1 }),
        animate('.3s ease', style({ right: '-500px', opacity: 1 })),
      ]),
    ]),
  ],

})
export class NavComponent implements OnInit {
  isMobileSidebarOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openCloseMobileSidebar() {
    this.isMobileSidebarOpen =! this.isMobileSidebarOpen
  }

}
