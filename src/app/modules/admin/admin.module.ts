import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { AdminComponent } from './admin.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { StoresComponent } from './pages/stores/stores.component';


@NgModule({
  declarations: [
    AuthComponent,
    DashboardComponent,
    NavComponent,
    AdminComponent,
    SideNavComponent,
    ProductsComponent,
    CustomersComponent,
    StoresComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
})
export class AdminModule { }
