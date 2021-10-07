import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productpreview',
  templateUrl: './productpreview.component.html',
  styleUrls: ['./productpreview.component.scss'],
})
export class ProductpreviewComponent implements OnInit {
  isProductPreviewLoaded: boolean = false;
  @Input() productArray: any;

  constructor() {}

  ngOnInit(): void {
    this.showSkel();
    // console.log(this.productArray)
  }

  //if product is already fetch the value of productArray=true
  showSkel() {
    if(this.productArray){
      this.isProductPreviewLoaded=true
    }
  }
}
