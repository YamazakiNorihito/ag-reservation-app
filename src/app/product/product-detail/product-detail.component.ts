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
      let id  = param.get('productId')!;
      let productObservable = this.productService.findyId(id);

      productObservable.subscribe(
        (data) => {this.product = data},
        (err) => {console.log(err)}
      )
    })
  }

}
