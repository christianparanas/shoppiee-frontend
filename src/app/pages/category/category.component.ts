import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  isImgLoaded: boolean = false;
  categoryProductsArr = new Array(11);

  constructor() {}

  ngOnInit(): void {}

  detectErroImg(e: any): void {
    console.log('error');
  }

  imgIsLoaded(): void {
    console.log('loaded');
  }
}
