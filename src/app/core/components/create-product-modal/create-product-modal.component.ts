import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-product-modal',
  templateUrl: './create-product-modal.component.html',
  styleUrls: ['./create-product-modal.component.scss']
})
export class CreateProductModalComponent implements OnInit {
  @Output() btnClickCloseModal = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.btnClickCloseModal.emit()
  }
 
}
