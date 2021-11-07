import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// interceptor
import { TokenInterceptor } from './interceptors/uTokenInterceptor';

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
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
