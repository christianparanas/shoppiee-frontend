import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  isImgLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  detectErroImg(e: any): void {
    console.log('error');
  }

  imgIsLoading(): void {
    console.log('loading');
  }
}
