import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router, private toast: HotToastService) { }

  canActivate(): boolean {
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['/account/login']);
      this.toast.info("Please login first!", { position: 'top-right' });
      return false;
    }
    return true;
  }
}

