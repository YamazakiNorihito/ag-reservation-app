import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path : '', component: ProductListComponent},
  {path : 'detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],   // forRootではなくforChild
  exports: [RouterModule]
})
export class ProductRoutingModule { }
