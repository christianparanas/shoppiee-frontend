import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInPageComponent } from './pages/log-in-page/log-in-page.component';


const routes: Routes = [
  { path: 'account/login', component: LogInPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
