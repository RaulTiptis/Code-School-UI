import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationService } from './email.service';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { JavaModuleComponent } from './java-module/java-module.component';
import { PythonModuleComponent } from './python-module/python-module.component';
import { CModuleComponent } from './c-module/c-module.component';
import { AchievementComponent } from './achievement/achievement.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterSuccessComponent,
    MainMenuComponent,
    JavaModuleComponent,
    PythonModuleComponent,
    CModuleComponent,
    AchievementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
