import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './pages/home/home.component'
import { RegisterComponent } from './pages/register/register.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HotsalesComponent } from './components/hotsales/hotsales.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryBtnComponent } from './components/category-btn/category-btn.component';
import { ProductComponent } from './components/product/product.component';
import { AccountComponent } from './pages/account/account.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LogInPageComponent,
    HeaderComponent,
    FormComponent,
    FooterComponent,
    CarouselComponent,
    HotsalesComponent,
    DiscoverComponent,
    CategoriesComponent,
    CategoryBtnComponent,
    ProductComponent,
    AccountComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
