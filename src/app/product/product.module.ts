import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import {ProductRoutingModule} from './product-routing.module'
import {ProductService} from './shared/product.service'



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListingsComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  providers :[
    ProductService
  ]
})
export class ProductModule { }
