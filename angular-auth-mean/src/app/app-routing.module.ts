import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './compunent/home/home.component';
import { RegisterComponent } from './compunent/register/register.component';
import { LoginComponent } from './compunent/login/login.component';
import { DashboardComponent } from './compunent/dashboard/dashboard.component';
import { ProfileComponent } from './compunent/profile/profile.component';

const routes: Routes = [{
  path:'',
  component:HomeComponent
},{
path:'register',
component:RegisterComponent
},{
path:'login',
component:LoginComponent
},
{
  path:'dashboard',
  component:DashboardComponent
  },
  {
    path:'profile',
    component:ProfileComponent
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
