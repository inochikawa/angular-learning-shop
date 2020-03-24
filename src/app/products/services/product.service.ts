import { Injectable } from '@angular/core';
import { ProductModel, ProductType } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() { }

  public selectedProducts: ProductModel[] = [];

  getProducts = () => {
    return [
      new ProductModel('iPhone XR', ProductType.Smartphone, 799),
      new ProductModel('iPhone 11 Pro', ProductType.Smartphone, 1299),
      new ProductModel('Samsung Galaxy S20', ProductType.Smartphone, 1399),
      new ProductModel('Honda Civic', ProductType.Car, 7599),
      new ProductModel('Nissan Silvia S15', ProductType.Car, 13499),
      new ProductModel('LG Smart TB', ProductType.TV, 750),
      new ProductModel('Macbook Pro 15 2019', ProductType.Laptop, 2600),
    ];
  }
}
