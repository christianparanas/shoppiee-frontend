import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpreview',
  templateUrl: './productpreview.component.html',
  styleUrls: ['./productpreview.component.scss']
})
export class ProductpreviewComponent implements OnInit {
  isProductPreviewLoaded: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.showSkel()
  }

  showSkel() {
    setTimeout(() => {
      this.isProductPreviewLoaded = true
    }, 3000)
  }

}
