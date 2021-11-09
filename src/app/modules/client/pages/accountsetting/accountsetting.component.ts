import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';

// services
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-accountsetting',
  templateUrl: './accountsetting.component.html',
  styleUrls: ['./accountsetting.component.scss'],
})
export class AccountsettingComponent implements OnInit {
  user = { name: 'lorem' };
  updateForm: FormGroup;
  constructor(private location: Location) {}

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    if (this.updateForm.status == 'VALID') {
      console.log(this.updateForm.value); // data to be save in our database;
    } else console.log('hello');
  }

  goBack() {
    this.location.back();
  }
}
