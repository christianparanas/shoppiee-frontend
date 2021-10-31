import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { CreateProductModalComponent } from './components/create-product-modal/create-product-modal.component';



@NgModule({
  declarations: [
    CreateProductModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateProductModalComponent
  ]
})
export class CoreModule { }
