import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recoverfeedback',
  templateUrl: './recoverfeedback.component.html',
  styleUrls: ['./recoverfeedback.component.scss'],
})
export class RecoverfeedbackComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}

  goBack(){
    this.router.navigate(['account/login'])
  }
}
