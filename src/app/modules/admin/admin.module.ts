import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { ChartsModule } from 'ng2-charts';

// ng material modules
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';

// components
import { AdminComponent } from './admin.component';
import { NavComponent } from './components/nav/nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AuthComponent } from './pages/auth/auth.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { StoresComponent } from './pages/stores/stores.component';

const ngMaterialModules = [
  MatTableModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatRippleModule,
  MatInputModule,
  MatSortModule,
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
  ],
  imports: [CommonModule, AdminRoutingModule, ...ngMaterialModules, ChartsModule],
})
export class AdminModule {}
