import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch:'full'},
  {path:'products', loadChildren:()=> import('./product/product.module').then(m => m.ProductModule)}, // Dynamic import
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent}
  /*
  {
    path:'products',component:ProductComponent,
    children:[
      {path:'',component:ProductListingsComponent},
      {path:'detail',component:ProductDetailComponent}
    ]
  }

  */
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
