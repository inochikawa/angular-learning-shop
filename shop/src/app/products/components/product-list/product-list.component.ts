import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  public products: ProductModel[] = [];

  @Output() addToCart: EventEmitter<ProductModel[]> = new EventEmitter<ProductModel[]>();

  constructor(private _productService: ProductService) { }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }

  onAddToCart() {
    this._productService.selectedProducts = this.products.filter(i => i.isSelected).slice();
  }
}
