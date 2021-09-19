import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';


import { HotToastService } from '@ngneat/hot-toast';


// services
import { AccountService } from "../../shared/services/account.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isPasswordMatch: boolean = true;
  submitLoading: boolean = false;

  submitValidate: any = {
    name: false,
    email: false,
    password: false,
    confirmpass: false
  }


  constructor(
    private accountService: AccountService, 
    public router: Router,
    private http: HttpClient,
    private toast: HotToastService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.registerForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required)
    });
  }

  checkInputs(): void {
    this.submitValidate = {
      name: (this.registerForm.controls.name.value == "" ? true : false),
      email: (this.registerForm.controls.email.value == "" ? true : false),
      password: (this.registerForm.controls.password.value == "" ? true : false),
      confirmpass: (this.registerForm.controls.confirmPassword.value == "" ? true : false)
    }

    console.log(this.submitValidate)
  }

  removeWarns(val: number) {
    if(val == 1) this.submitValidate.name = false
    if(val == 2) this.submitValidate.email = false
    if(val == 3) this.submitValidate.password = false
    if(val == 4) this.submitValidate.confirmpass = false
  }

  // submit form
  onSubmit() {
    console.log(this.registerForm)
    this.checkInputs()

    if(this.registerForm.status == 'VALID' && this.isPasswordMatch == true) {

      // start the loader
      this.submitLoading = true

      var formData: any = new FormData();
      formData.append("name", this.registerForm.value.name);
      formData.append("email", this.registerForm.value.email);
      formData.append("password", this.registerForm.value.password);

      this.accountService.register(formData)
        .subscribe(
          response => {
            this.submitLoading = false
            this.toast.success(response.message, { position: 'top-right' });
            console.log(response);
          },
          error => {
            this.submitLoading = false

            if(error.status == 0) {
              this.toast.error("Server is down, help! hehe", { position: 'top-right' });
            } else if(error.status == 422) {
              this.toast.error(error.error.email[0], { position: 'top-right' });
            } else if(error.status == 500) {
              this.toast.error(error.statusText, { position: 'top-right' });
            }

            console.log(error);
          }
        );
    }  
  }


  // check password if match to the confirm password input
  checkPass() {
    if(this.registerForm.value.password != '' && this.registerForm.value.password == this.registerForm.value.confirmPassword) {
      this.isPasswordMatch = true;
    }
    else if(this.registerForm.value.password != '' && this.registerForm.value.confirmPassword != '' && this.registerForm.value.password != this.registerForm.value.confirmPassword) {
      this.isPasswordMatch = false;
    }
    else if(this.registerForm.value.confirmPassword == '' || this.registerForm.value.password == '') {
      this.isPasswordMatch = true;
    }
  }
}
