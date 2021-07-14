import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListingsComponent implements OnInit {

  productList : any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    let ProductObservable = this.productService.getProducts();

    ProductObservable.subscribe(
      (data) => {
        this.productList = data;
      },
      (err) => {console.log('エラー')},
      () => {console.log('完了')}
    )
  }

}
