import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { AuthGuard } from '../auth/shared/auth.guard';

const routes: Routes = [
  { path: '', component: ProductListingsComponent },
  { path: ':productId', component: ProductDetailComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],   // forRootではなくforChild
  exports: [RouterModule]
})
export class ProductRoutingModule { }
