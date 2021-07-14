import { Injectable } from '@angular/core';

import {MockDataProducts} from '../mock-data-products'
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URI :string = 'http://localhost:3001/api/v1/products';


  constructor(private http:HttpClient) { }

  getProducts() : Observable<any> {
    return this.http.get(this.URI);
  }

  findyId(id : number) : any{
    return MockDataProducts[id];
  }
}
