import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './modules/admin/admin.module';

// material modules
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

// vendors
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSplideModule } from 'ngx-splide';
import { HotToastModule } from '@ngneat/hot-toast';

// reusable components
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HotsalesComponent } from './components/hotsales/hotsales.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { CategorypreviewComponent } from './components/categorypreview/categorypreview.component';
import { ProductpreviewComponent } from './components/productpreview/productpreview.component';
import { NavComponent } from './components/nav/nav.component';
import { StorepreviewComponent } from './components/storepreview/storepreview.component';
import { FooterComponent } from './components/footer/footer.component';
import { AddToCartNavComponent } from './components/add-to-cart-nav/add-to-cart-nav.component';

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
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { MyaddressComponent } from './pages/myaddress/myaddress.component';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { UseraddproductsComponent } from './pages/useraddproducts/useraddproducts.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { BuyAgainComponent } from './pages/buy-again/buy-again.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SearchComponent } from './pages/search/search.component';

// pages components
const pagesComponents = [
  HomeComponent,
  RegisterComponent,
  LogInPageComponent,
  MyprofileComponent,
  MessagesComponent,
  SearchComponent,
  CheckOutComponent,
  BuyAgainComponent,
  CategoriesComponent,
  AccountComponent,
  RecoveraccountComponent,
  RecoverfeedbackComponent,
  UserstoreComponent,
  AccountsettingComponent,
  ProductComponent,
  MyaddressComponent,
  AddToCartComponent,
  UseraddproductsComponent,
  CategoryComponent,
  StoreComponent,
  StoresComponent,
];

const reusableComponents = [
  HeaderComponent,
  FormComponent,
  CarouselComponent,
  HotsalesComponent,
  DiscoverComponent,
  CategorypreviewComponent,
  ProductpreviewComponent,
  NavComponent,
  StorepreviewComponent,
  FooterComponent,
  AddToCartNavComponent,
];

@NgModule({
  declarations: [AppComponent, ...pagesComponents, ...reusableComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    NgxSplideModule,
    ReactiveFormsModule,
    HotToastModule.forRoot(),
    FormsModule,
    AdminModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
