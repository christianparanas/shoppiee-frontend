import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import {Location} from '@angular/common';

export interface dataFromForm{
  id?:string,
  name:string,
  email:string,
  password:string,
  number:string,
  date:string,
}

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  user = {name:'lorem'}
  updateForm:FormGroup;
  data:dataFromForm[];
  constructor(private location:Location) { }

  ngOnInit(): void {
    this.updateForm=new FormGroup({
      id: new FormControl(''),
      name: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
    })
  }


  onSubmit(){
    if(this.updateForm.status=='VALID'){
      console.log(this.updateForm.value) // data to be save in our database;
    }
    else console.log('hello')
  }

  goBack(){
    this.location.back();
  }
}
