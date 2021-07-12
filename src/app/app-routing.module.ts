import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch:'full'},
  {path:'products', loadChildren:()=> import('./product/product.module').then(m => m.ProductModule)} // Dynamic import
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
