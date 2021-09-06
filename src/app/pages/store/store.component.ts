import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {
  @Input() follow:string='follow';
  @Input() storeName:String='centro guy San.O';
  constructor() { }

  ngOnInit(): void {
  }

  isFollowed(){
    this.follow=this.follow=='followed' ? 'follow' : 'followed';
  }

}
