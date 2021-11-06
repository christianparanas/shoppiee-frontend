import { Component, OnInit } from '@angular/core';

// services 
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  regCred: any = {
    email: "",
    name: "",
    password: "",
  }

  logCred: any = {
    email: "",
    pass: ""
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register({
      ...this.regCred
    }).subscribe(
      (response) => {
        console.log(response)
      },
      (error) => {
        console.log(error)
      }
    )
  }

}
