import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotsales',
  templateUrl: './hotsales.component.html',
  styleUrls: ['./hotsales.component.scss']
})
export class HotsalesComponent implements OnInit {
  fakeArray = new Array(10);

  constructor() { }

  ngOnInit(): void {
  }

}
