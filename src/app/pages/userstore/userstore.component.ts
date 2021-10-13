import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

// services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-userstore',
  templateUrl: './userstore.component.html',
  styleUrls: ['./userstore.component.scss'],
})
export class UserstoreComponent implements OnInit {
  discoverProductsArr = new Array(11);

  constructor(
    private location: Location,
    private authService: AuthService,
    public router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.checkIfAuth();
  }

  checkIfAuth() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/account/login']);
      this.toast.warning('Login first!', { position: 'top-right' });
    }
  }
}
