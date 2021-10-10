import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
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
import { CategoryComponent } from './pages/category/category.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { MyaddressComponent } from './pages/myaddress/myaddress.component';

import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { UseraddproductsComponent } from './pages/useraddproducts/useraddproducts.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { BuyAgainComponent } from './pages/buy-again/buy-again.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'category/:id', component: CategoryComponent },

  { path: 'product/:id', component: ProductComponent },

  { path: 'add-to-cart', component: AddToCartComponent },
  { path: 'add-to-cart/buy-again', component: BuyAgainComponent },
  { path: 'add-to-cart/check-out', component: CheckOutComponent },

  { path: 'stores', component: StoresComponent },
  { path: 'store/:storeId', component: StoreComponent },

  { path: 'account', component: AccountComponent },
  { path: 'account/setting', component: AccountsettingComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'account/login', component: LogInPageComponent },
  { path: 'account/recover', component: RecoveraccountComponent },
  { path: 'account/recover/feedback', component: RecoverfeedbackComponent },
  { path: 'account/store', component: UserstoreComponent },

  { path: 'account/setting/myprofile', component: MyprofileComponent },
  { path: 'account/setting/myaddress', component: MyaddressComponent },

  { path: 'account/store/addproduct', component: UseraddproductsComponent },
  { path: 'messages', component: MessagesComponent },

  { path: 'search', component: SearchComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
