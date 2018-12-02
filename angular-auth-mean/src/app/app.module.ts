import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './compunent/login/login.component';
import { NavbarComponent } from './compunent/navbar/navbar.component';
import { RegisterComponent } from './compunent/register/register.component';
import { HomeComponent } from './compunent/home/home.component';
import { ProfileComponent } from './compunent/profile/profile.component';
import { DashboardComponent } from './compunent/dashboard/dashboard.component';
import { from } from 'rxjs';

import { ValidationService } from './services/validation.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ValidationService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
