import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MockDataProducts} from '../mock-data-products'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product : any;
  constructor(private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(param => {
      this.product = MockDataProducts[+param.get('productId')!]
    })
  }

}
