import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'https://localhost:44380/api/';

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + 'products/GetAll';

    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  } //gelen datayı product response modelda map ediyoruz.

  getProductsByCategory(
    categoryId: number
  ): Observable<ListResponseModel<Product>> {
    let newPath =
      this.apiUrl + 'products/GetProductsByCategoryId?categoryId=' + categoryId;

    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
