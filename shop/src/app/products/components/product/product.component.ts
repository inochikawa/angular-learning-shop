import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {

  @Input() public model: ProductModel;

  // @Output() public selectProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();
  // @Output() public removeProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect() {
    this.model.isSelected= true;
    // this.selectProduct.emit(this.model);
  }

  onRemove() {
    this.model.isSelected= false;
    // this.removeProduct.emit(this.model);
  }
}
