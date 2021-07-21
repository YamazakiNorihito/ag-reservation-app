import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'

import { AuthService } from './shared/auth.service'
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AuthModule { }
