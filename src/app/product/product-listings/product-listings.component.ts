import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MockDataProducts} from '../mock-data-products'

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListingsComponent implements OnInit {

  productList : any = MockDataProducts;

  constructor() { }

  ngOnInit(): void {
  }

}
