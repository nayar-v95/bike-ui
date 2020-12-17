import { LoginComponent } from './components/login/login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddBikeComponent } from './components/add-bike/add-bike.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path : "",
  //   component :HomeComponent
  // },
  {
    path : "home",
    component :HomeComponent
  },
  {
    path: "addBike",
    component : AddBikeComponent
  },
  {
    path: "admin",
    component : AdminComponent
  },
  {
    path: "userRegistration",
    component : UserRegistrationComponent
  },
  {
    path: "login",
    component : LoginComponent
  },
  {
    path:"",
    redirectTo :"home",
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
