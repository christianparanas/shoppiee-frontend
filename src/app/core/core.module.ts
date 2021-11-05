import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// components
import { CreateProductModalComponent } from './components/create-product-modal/create-product-modal.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';



@NgModule({
  declarations: [
    CreateProductModalComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CreateProductModalComponent,
    DateAgoPipe
  ]
})
export class CoreModule { }
