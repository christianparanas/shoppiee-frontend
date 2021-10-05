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
    this.initForm();
  }

  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.loginForm);

    if (this.loginForm.status == 'VALID') {
      // start the loader
      this.submitLoading = true;

      var formData: any = new FormData();
      formData.append('email', this.loginForm.value.email);
      formData.append('password', this.loginForm.value.password);

      this.authService.login(formData).subscribe(
        (response) => {
          this.submitLoading = false;
          this.toast.success(response.message, { position: 'top-right' });
          console.log(response);
        },
        (error) => {
          this.submitLoading = false;

          if (error.status == 0) {
            this.toast.error('Server is down, help! hehe', {
              position: 'top-right',
            });
          } else if (error.status == 401) {
            this.toast.error(error.error.message, { position: 'top-right' });
          } else if (error.status == 422) {
            this.toast.error(error.error.email[0], { position: 'top-right' });
          } else if (error.status == 500) {
            this.toast.error(error.statusText, { position: 'top-right' });
          }

          console.log(error);
        }
      );
    }
  }
}
