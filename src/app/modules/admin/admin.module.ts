import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// modules
import { CoreModule } from '../../core/core.module'
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../material/material.module';

// vendor
import { ChartsModule } from 'ng2-charts';

// components
import { NavComponent } from './components/nav/nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

// pages
import { AuthComponent } from './pages/auth/auth.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { StoresComponent } from './pages/stores/stores.component';
import { OrdersComponent } from './pages/orders/orders.component';

const pagesComponents = [
  AuthComponent,
  DashboardComponent,
  ProductsComponent,
  CustomersComponent,
  StoresComponent,
  OrdersComponent
]

const reusableComponents = [
  NavComponent,
  SideNavComponent
]


@NgModule({
  declarations: [
    AdminComponent,
    ...reusableComponents,
    ...pagesComponents
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ChartsModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class AdminModule {}
