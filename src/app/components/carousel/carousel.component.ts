import { Component, Input, OnInit } from '@angular/core';
// import { array } from 'joi';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() photo_slides= [
    'https://cf.shopee.sg/file/13cb60436d5be6c7a35ef29695ac42a0',
    'https://cf.shopee.sg/file/0e4011ba6cefb06abbc4e65c1497fe2e',
    'https://cf.shopee.sg/file/4d058ac92540b91cdf31f6d99af8046c',
  ];
  @Input() boxes_images =[
    'https://cf.shopee.sg/file/f415b00d16b0b5499d9e2ee955f00471',
    'https://cf.shopee.sg/file/8c837767f9bc05fcc8e02d996cda35fe',
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
