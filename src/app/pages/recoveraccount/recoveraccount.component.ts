import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recoveraccount',
  templateUrl: './recoveraccount.component.html',
  styleUrls: ['./recoveraccount.component.scss'],
})
export class RecoveraccountComponent implements OnInit {
  emailValidation:FormGroup;
  @Input() notify:boolean=false;
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    this.emailValidation= new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
    })
  }
  //get the element all of email status
  get email() {return this.emailValidation.get('email')}
  
  //check if the email is valid if true then go to feedbackPage
  recoverFeedBack(){
    if(this.email?.status== 'VALID'){
      this.router.navigate(['account/recover/feedback'])
    }else{
      this.notify=true;
    }
  }
}
