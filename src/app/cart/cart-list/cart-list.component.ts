import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/products/models/product.model';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.less']
})
export class CartListComponent implements OnInit {

  public totalSum: number = 0;
  public totalQuantity: number = 0;
  public products: ProductModel[] = [];

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products = this._productService.selectedProducts.slice();
    this.totalSum = this.products.reduce((a, b) => a + b.price, 0);
    this.totalQuantity = this.products.length;
  }
}
