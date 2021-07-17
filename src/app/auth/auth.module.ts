import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'

import {AuthService} from './shared/auth.service'

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers :[
    AuthService
  ]
})
export class AuthModule { }
