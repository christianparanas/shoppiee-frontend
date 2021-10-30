import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { ProfileService } from '../../shared/services/profile.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  userIsAuth: boolean = true;

  constructor(private router: Router, private profileService: ProfileService,) {}

  ngOnInit(): void {
    this.loadAccountData()
  }

  loadAccountData = () => {
    this.profileService.getProfileData().subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.error(error)
      }
    )
  }
}
