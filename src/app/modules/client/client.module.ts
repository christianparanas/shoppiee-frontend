import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { ClientRoutingModule } from './client-routing.module';
import { MaterialModule } from '../material/material.module';
import { CoreModule } from '../../core/core.module'
import {MatIconModule} from '@angular/material/icon'

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
import { MyaddressComponent } from './pages/myaddress/myaddress.component';
import { AddToCartComponent } from './pages/add-to-cart/add-to-cart.component';
import { UseraddproductsComponent } from './pages/useraddproducts/useraddproducts.component';
import { CheckOutComponent } from './pages/check-out/check-out.component';
import { BuyAgainComponent } from './pages/buy-again/buy-again.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { SearchComponent } from './pages/search/search.component';
import { PaymentComponent } from './pages/payment/payment.component';

// pages components
const pagesComponents = [
  HomeComponent,
  RegisterComponent,
  LogInPageComponent,
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
  declarations: [...pagesComponents, ...reusableComponents, PaymentComponent],
  imports: [
    BrowserModule,
    CommonModule,
    ClientRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    NgxSplideModule,
    ReactiveFormsModule,
    FormsModule,
    HotToastModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    MatIconModule,
  ],
  providers: []
})
export class ClientModule { }
