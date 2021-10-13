import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  userIsAuth: boolean = true;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.checkIfAuth()
  }

  checkIfAuth() {
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/account/login']);
    }
  }
}
