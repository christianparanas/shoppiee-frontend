import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxSplideModule } from 'ngx-splide';

import { HomeComponent } from './pages/home/home.component'
import { RegisterComponent } from './pages/register/register.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HotsalesComponent } from './components/hotsales/hotsales.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategorypreviewComponent } from './components/categorypreview/categorypreview.component';
import { ProductpreviewComponent } from './components/productpreview/productpreview.component';
import { AccountComponent } from './pages/account/account.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductComponent } from './pages/product/product.component';
import { RecoveraccountComponent } from './pages/recoveraccount/recoveraccount.component';
import { RecoverfeedbackComponent } from './pages/recoverfeedback/recoverfeedback.component';
import { UserstoreComponent } from './pages/userstore/userstore.component';
import { AccountsettingComponent } from './pages/accountsetting/accountsetting.component';
import { StoreComponent } from './pages/store/store.component';
import { StoresComponent } from './pages/stores/stores.component';
import { StorepreviewComponent } from './components/storepreview/storepreview.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LogInPageComponent,
    HeaderComponent,
    FormComponent,
    CarouselComponent,
    HotsalesComponent,
    DiscoverComponent,
    CategoriesComponent,
    CategorypreviewComponent,
    ProductpreviewComponent,
    AccountComponent,
    NavComponent,
    ProductComponent,
    RecoveraccountComponent,
    RecoverfeedbackComponent,
    UserstoreComponent,
    AccountsettingComponent,
    StoreComponent,
    StoresComponent,
    StorepreviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule,
    NgxSplideModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
