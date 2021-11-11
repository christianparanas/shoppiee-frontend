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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isPasswordMatch: boolean = true;
  submitLoading: boolean = false;

  submitValidate: any = {
    name: false,
    email: false,
    password: false,
    confirmpass: false,
    address: false,
  };

  constructor(
    private authService: AuthService,
    public router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {
    this.checkIfAuth();
    this.initForm();
  }

  checkIfAuth() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/account/']);
    }
  }

  initForm() {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });
  }

  // check if the inputs have value if the user click the subnit btn
  checkInputs(): void {
    this.submitValidate = {
      name: this.registerForm.controls.name.value.trim() == '' ? true : false,
      email: this.registerForm.controls.email.value.trim() == '' ? true : false,
      address: this.registerForm.controls.address.value.trim() == '' ? true : false,
      password:
        this.registerForm.controls.password.value.trim() == '' ? true : false,
      confirmpass:
        this.registerForm.controls.confirmPassword.value.trim() == ''
          ? true
          : false,
    };
  }

  // this removes the input warnings based on where the user type something
  removeWarns(val: number) {
    if (val == 1) this.submitValidate.name = false;
    if (val == 2) this.submitValidate.email = false;
    if (val == 3) this.submitValidate.password = false;
    if (val == 4) this.submitValidate.confirmpass = false;
    if (val == 5) this.submitValidate.address = false;
  }

  // submit form
  onSubmit() {
    // check inputs if valid
    this.checkInputs();

    if (this.registerForm.status == 'VALID' && this.isPasswordMatch == true) {
      // start the loader
      this.submitLoading = true;

      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          this.submitLoading = false;
          this.toast.success(response.message, { position: 'top-right' });

          setTimeout(() => {
            this.router.navigate(['/account/login']);
            this.toast.success('Please login 😉', { position: 'top-right' });
          }, 1000);
        },
        (error) => {
          let result: any;
          this.submitLoading = false;
          if (error.status == 0) {
            result = 'Server is down, help! hehe';
          } else if (error.status == 403) {
            result = error.error.message;
          } else if (error.status == 422) {
            result = error.error.email[0];
          } else if (error.status == 500) {
            result = error.statusText;
          }
          this.toast.error(result, { position: 'top-right' });
          console.log(error);
        }
      );
    }
  }

  // check password if match to the confirm password input
  checkPass() {
    if (
      (this.registerForm.value.password != '' &&
        this.registerForm.value.password ==
          this.registerForm.value.confirmPassword) ||
      this.registerForm.value.confirmPassword == '' ||
      this.registerForm.value.password == ''
    ) {
      this.isPasswordMatch = true;
    } else {
      this.isPasswordMatch = false;
    }
  }
}
