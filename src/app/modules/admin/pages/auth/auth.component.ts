import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';

// services 
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  submitLoading: boolean = false;

  regForm: any = {
    name: "",
    email: "",
    password: ""
  }

  constructor(private authService: AuthService, private toast: HotToastService, public router: Router,) { }

  ngOnInit(): void {
    this.checkIfAuth()
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  checkIfAuth() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/admin/']);
    }
  }

  regAdminUser() {
    this.authService.register({
      ...this.regForm
    }).subscribe(
      (response: any) => {
        this.toast.success(response.message, { position: 'top-right' });
      },
      (error) => {
        console.log(error)
      }
    ) 
  }

  onSubmit() {
    //check if the input is valid and password is not empty and not using multiple space.
    if (
      this.loginForm.status == 'VALID' &&
      this.loginForm.controls.password.value.trim()
    ) {
      // start the loader
      this.submitLoading = true;

      this.authService.login(this.loginForm.value).subscribe(
        (response: any) => {
          this.submitLoading = false;
          this.toast.success(response.message, { position: 'top-right' });

          // return the data to service
          this.authService.setSession(response);

          // nav to accountpage
          this.router.navigate(['/admin/']);
        },
        (error) => {
          this.submitLoading = false;
          let result: any;

          if (error.status == 0) {
            result = 'Server is down!';
          } else if (error.status == 401) {
            result = error.error.message;
          } else if (error.status == 422) {
            result = error.error.email[0];
          } else if (error.status == 500) {
            result = error.statusText;
          }
          this.toast.error(result, { position: 'top-right' });
        }
      );
    } else {
      this.toast.error('Invalid Email or Password', { position: 'top-right' });
    }
  }

}
