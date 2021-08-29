import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';

const routes: Routes = [
  { path: 'account/register', component: RegisterComponent },
  { path: 'account/login', component: LogInPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
