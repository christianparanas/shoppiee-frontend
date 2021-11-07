import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { AuthService } from '../../shared/services/auth.service'


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
  currentRoute: any;
  onScroll: boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService, private router: Router, private toast: HotToastService) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.listenScrollEvent);
    
    this.getCurrentRouteURL(this.route.snapshot.children[0].routeConfig?.path);
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/admin/auth']);
    this.toast.success('Logged out!', { position: 'top-right' });
  }

  getCurrentRouteURL(route: any) {
    // getting currentRoute url path
    route == '' ? this.currentRoute = '/' : this.currentRoute = route;
  }

  openCloseMobileSidebar() {
    this.isMobileSidebarOpen =! this.isMobileSidebarOpen
  }

  listenScrollEvent = () => {
    window.scrollY > 15 ? (this.onScroll = true) : (this.onScroll = false);
  };

}
