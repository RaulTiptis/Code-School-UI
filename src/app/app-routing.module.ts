import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {RegisterSuccessComponent} from './register-success/register-success.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'home-page', component: HomePageComponent},
  {path: 'register-success', component: RegisterSuccessComponent},
  {path: 'main-menu', component: MainMenuComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
