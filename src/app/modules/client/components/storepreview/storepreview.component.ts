import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-storepreview',
  templateUrl: './storepreview.component.html',
  styleUrls: ['./storepreview.component.scss']
})
export class StorepreviewComponent implements OnInit {
  @Input() storeArray: any;

  constructor() { }

  ngOnInit(): void {
  }

}
