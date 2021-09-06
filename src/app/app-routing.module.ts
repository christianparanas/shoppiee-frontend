import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { RegisterComponent } from './pages/register/register.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { AccountComponent } from './pages/account/account.component';
import { ProductComponent } from './pages/product/product.component';
import { RecoveraccountComponent } from './pages/recoveraccount/recoveraccount.component';
import { RecoverfeedbackComponent } from './pages/recoverfeedback/recoverfeedback.component';
import { UserstoreComponent } from './pages/userstore/userstore.component';
import { AccountsettingComponent } from './pages/accountsetting/accountsetting.component';
import { StoreComponent } from './pages/store/store.component';
import { StoresComponent } from './pages/stores/stores.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'product/:id', component: ProductComponent },

  { path: 'stores', component: StoresComponent },
  { path: 'store/:storeId', component: StoreComponent },
  
  { path: 'account', component: AccountComponent },
  { path: 'account/setting', component: AccountsettingComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'account/login', component: LogInPageComponent },
  { path: 'account/recover', component: RecoveraccountComponent },
  { path: 'account/recover/feedback', component: RecoverfeedbackComponent },
  { path: 'account/store', component: UserstoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
