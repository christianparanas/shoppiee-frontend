import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// services
import { AuthGuardService as AuthGuard } from './shared/services/auth-guard.service';

// pages
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
import { MyaddressComponent } from './pages/myaddress/myaddress.component';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { BuyAgainComponent } from './pages/buy-again/buy-again.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SearchComponent } from './pages/search/search.component';
import { PaymentComponent } from './pages/payment/payment.component';


const routes: Routes = [
    //  public routes
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'category/:id', component: CategoryComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'stores', component: StoresComponent },
    { path: 'store/:storeId', component: StoreComponent },
    { path: 'account/register', component: RegisterComponent },
    { path: 'account/login', component: LogInPageComponent },
    { path: 'account/recover', component: RecoveraccountComponent },
    { path: 'account/recover/feedback', component: RecoverfeedbackComponent },
  
    // protected routes
    { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
    { path: 'account', component: AccountComponent, canActivate: [AuthGuard] },
    { path: 'account/setting', component: AccountsettingComponent, canActivate: [AuthGuard] },
    { path: 'account/setting/myaddress', component: MyaddressComponent, canActivate: [AuthGuard] },
    { path: 'account/store', component: UserstoreComponent, canActivate: [AuthGuard] },
    { path: 'account/store/messages', component: MessagesComponent, canActivate: [AuthGuard] },
    { path: 'cart', component: AddToCartComponent, canActivate: [AuthGuard] },
    { path: 'cart/buy-again', component: BuyAgainComponent, canActivate: [AuthGuard] },
    { path: 'checkout', component: CheckOutComponent, canActivate: [AuthGuard] },
    { path: 'checkout/success', component: PaymentComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
