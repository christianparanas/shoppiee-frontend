import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// services
import { AccountService } from "../../shared/services/account.service";

import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isPasswordMatch: boolean = true;

  // api endpoint
  apiURL = environment.apiURL

  constructor(
    public accountService: AccountService, 
    public router: Router,
    private http: HttpClient
  ) { 

  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if(this.registerForm.status == 'VALID') {
      console.log(this.registerForm); 

      var formData: any = new FormData();
      formData.append("name", this.registerForm.value.name);
      formData.append("email", this.registerForm.value.email);
      formData.append("password", this.registerForm.value.password);

      this.http.post(`${this.apiURL}/api/auth/register`, formData).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      )
    }
       
  }

  checkPass() {
    if(this.registerForm.value.password != '' && this.registerForm.value.password == this.registerForm.value.confirmPassword) {
      this.isPasswordMatch = true;
    }
    else if(this.registerForm.value.confirmPassword != '' && this.registerForm.value.password != this.registerForm.value.confirmPassword) {
      this.isPasswordMatch = false;
    }
    else if(this.registerForm.value.confirmPassword == '' || this.registerForm.value.password == '') {
      this.isPasswordMatch = true;
    }
  }


  initForm() {
    this.registerForm = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required),
      'confirmPassword': new FormControl('', Validators.required)
    });
  }


}
