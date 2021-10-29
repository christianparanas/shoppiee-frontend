import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

import { HotToastService } from '@ngneat/hot-toast';

// services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.scss'],
})
export class LogInPageComponent implements OnInit {
  loginForm: FormGroup;
  submitLoading: boolean = false;

  constructor(
    private authService: AuthService,
    public router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.checkIfAuth()
    this.initForm();
  }

  checkIfAuth() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/account/']);
    }
  }

  initForm() {
    console.log(this.loginForm)
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    //check if the input is valid and password is not empty and not using multiple space.
    if (this.loginForm.status == 'VALID' && this.loginForm.controls.password.value.trim()){
      // start the loader
      console.log(this.loginForm)
      this.submitLoading = true;
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          this.submitLoading = false;
          this.toast.success(response.message, { position: 'top-right' });

          // return the data to service
          this.authService.setSession(response)

          // nav to accountpage
          this.router.navigate(['/account/']);
        },
        (error) => {
          this.submitLoading = false;
          let result:any;

          if (error.status == 0) {
            result='Server is down, help! hehe'
          } else if (error.status == 401) {
            result=error.error.message
          } else if (error.status == 422) {
            result=error.error.email[0]
            
          } else if (error.status == 500) {
            result=error.statusText
          }
          this.toast.error(result,{ position: 'top-right' })
        }
      );
    }else{
      this.toast.error('Invalid Email or Password',{position:'top-right'})
    }
  }
}
