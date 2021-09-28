import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-footer',
  templateUrl: './add-to-cart-footer.component.html',
  styleUrls: ['./add-to-cart-footer.component.scss']
})
export class AddToCartFooterComponent implements OnInit {
  @Input() totalPrice:number = 0;
  @Input() productQuantity:number = 9;

  constructor() { }

  ngOnInit(): void {
  }

}
