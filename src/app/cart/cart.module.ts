import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from '../products/services/product.service';



@NgModule({
  declarations: [CartListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  // tslint:disable-next-line:object-literal-sort-keys
  exports: [CartListComponent],
  providers: [ProductService]
})
export class CartModule { }
