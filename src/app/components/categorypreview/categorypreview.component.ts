import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categorypreview',
  templateUrl: './categorypreview.component.html',
  styleUrls: ['./categorypreview.component.scss'],
})
export class CategorypreviewComponent implements OnInit {
  @Input() categoryArr: any;

  constructor() {}

  ngOnInit(): void {}
}
