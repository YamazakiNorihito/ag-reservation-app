import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : any;
  constructor(private activateRoute:ActivatedRoute
              ,private productService :ProductService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(param => {
      this.product = this.productService.findyId(+param.get('productId')!);
    })
  }

}
