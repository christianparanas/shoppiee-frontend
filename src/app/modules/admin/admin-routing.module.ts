import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// services
import { AuthGuardService as AuthGuard } from './shared/services/auth-guard.service';


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
      { path: "", component: DashboardComponent, canActivate: [AuthGuard] },
      { path: "products", component: ProductsComponent, canActivate: [AuthGuard] },
      { path: "users", component: CustomersComponent, canActivate: [AuthGuard] },
      { path: "orders", component: OrdersComponent, canActivate: [AuthGuard] },
      { path: "stores", component: StoresComponent, canActivate: [AuthGuard] },
    ] 
  },
  { path: "admin/auth", component: AuthComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
