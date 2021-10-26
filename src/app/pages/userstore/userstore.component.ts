import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-userstore',
  templateUrl: './userstore.component.html',
  styleUrls: ['./userstore.component.scss'],
})
export class UserstoreComponent implements OnInit {
  isMsgPanelOpen: boolean = false;
  discoverProductsArr = new Array(11);
  onScroll1: boolean = false;
  onScroll2: boolean = false;

  constructor(
    private location: Location,
    public router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {
    window.scrollY > 122 ? (this.onScroll1 = true) : (this.onScroll1 = false);
    window.scrollY > 12 ? (this.onScroll2 = true) : (this.onScroll2 = false);
  };

  openCloseMsgPanel() {
    this.isMsgPanelOpen =! this.isMsgPanelOpen
  }

  goBack() {
    this.location.back();
  }
}
