import { filter } from 'rxjs/operators';
import { Observable, map } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = "https://fakestoreapi.com";


  constructor(private httpClient: HttpClient) { }
  ngOnInit(): void {}

  getAllProducts(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/products")
  }

  getSingleProducts(id: string): Observable<any> {
    return this.httpClient.get(this.baseUrl + `/products/${id}`)
  }

  getCategories() {
    return this.httpClient.get(this.baseUrl + "/home/categories").pipe(
      map(category => filter(category => category !== 'electronics')))


  }

  getProductsByCategory(category: any) {
    return this.httpClient.get(this.baseUrl + `/products/category`);

  }

  getAllCategories() {
    return this.httpClient.get(this.baseUrl + `/products/categories`);

  }
  getSpecificCategory(categoryId: string) {
    return this.httpClient.get(this.baseUrl + `/products/category/${categoryId}`);

  }
  updateProduct(id: any,updateProduct:product ): any {
    return this.httpClient.put(this.baseUrl + `/products/${id}` ,updateProduct)
  }
}