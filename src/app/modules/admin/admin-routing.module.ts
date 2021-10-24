import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { StoresComponent } from './pages/stores/stores.component';
import { OrdersComponent } from './pages/orders/orders.component';

const routes: Routes = [
  { 
    path: 'admin', 
    component: AdminComponent, 
    children: [
      { path: "", component: DashboardComponent },
      { path: "products", component: ProductsComponent },
      { path: "customers", component: CustomersComponent },
      { path: "orders", component: OrdersComponent },
      { path: "stores", component: StoresComponent },
    ] 
  },
  { path: "admin/auth", component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
