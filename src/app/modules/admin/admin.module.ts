import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdminRoutingModule } from './admin-routing.module';

import { ChartsModule } from 'ng2-charts';

// ng material modules
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

// components
import { AdminComponent } from './admin.component';
import { NavComponent } from './components/nav/nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AuthComponent } from './pages/auth/auth.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { StoresComponent } from './pages/stores/stores.component';
import { OrdersComponent } from './pages/orders/orders.component';

const ngMaterialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatRippleModule,
  MatInputModule,
  MatSortModule,
  MatCardModule,
  MatChipsModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
];

@NgModule({
  declarations: [
    AuthComponent,
    DashboardComponent,
    NavComponent,
    AdminComponent,
    SideNavComponent,
    ProductsComponent,
    CustomersComponent,
    StoresComponent,
    OrdersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ...ngMaterialModules,
    ChartsModule,
    BrowserAnimationsModule
  ],
})
export class AdminModule {}
