import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

// services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.component.html',
  styleUrls: ['./accountsetting.component.scss'],
})
export class AccountsettingComponent implements OnInit {
  isAboutUsOverlayOpen: boolean = false;

  constructor(
    private authService: AuthService,
    public router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/account/login']);
    this.toast.success('Logged out!', { position: 'top-right' });
  }

  openCloseAboutUsOverlay(): void {
    this.isAboutUsOverlayOpen = !this.isAboutUsOverlayOpen;
  }
}
