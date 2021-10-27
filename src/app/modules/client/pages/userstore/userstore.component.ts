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
  discoverProductsArr = new Array(11);
  onScroll: boolean = false;


  constructor(
    private location: Location,
    public router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = () => {
    window.scrollY > 12 ? (this.onScroll = true) : (this.onScroll = false);
  };

  goBack() {
    this.location.back();
  }
}
