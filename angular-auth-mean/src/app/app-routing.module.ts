import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './compunent/home/home.component';
import { RegisterComponent } from './compunent/register/register.component';
import { LoginComponent } from './compunent/login/login.component';
import { DashboardComponent } from './compunent/dashboard/dashboard.component';
import { ProfileComponent } from './compunent/profile/profile.component';
import { AuthGuard } from './auth-guard/auth-guard';

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
  component:DashboardComponent,
  canActivate:[AuthGuard]
  },
  {
    path:'profile',
    component:ProfileComponent,
    canActivate:[AuthGuard]
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
