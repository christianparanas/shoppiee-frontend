import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss']
})
export class CheckOutComponent implements OnInit {
  @Input() all:number
  @Input() allHeader:number=1
  constructor() { }

  ngOnInit(): void {
    
  }

}
