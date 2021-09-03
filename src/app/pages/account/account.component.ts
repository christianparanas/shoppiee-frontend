import { Component, OnInit } from '@angular/core';
import {RouterModule,Router} from '@angular/router'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  userIsAuth: boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(this.userIsAuth == false) {
      this.router.navigate(["/account/login"]);
    }
  }

}
