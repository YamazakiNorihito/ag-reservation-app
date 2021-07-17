import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],   // forRootではなくforChild
  exports: [RouterModule]
})
export class AuthRoutingModule { }
