import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {
  @Input() contentName:string='';
  fakeArray = new Array(10);

  constructor() { }

  ngOnInit(): void {
  }

}
