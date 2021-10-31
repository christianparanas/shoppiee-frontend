import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { CreateProductModalComponent } from './components/create-product-modal/create-product-modal.component';



@NgModule({
  declarations: [
    CreateProductModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CreateProductModalComponent
  ]
})
export class CoreModule { }
