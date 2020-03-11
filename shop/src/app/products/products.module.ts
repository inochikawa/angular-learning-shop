import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './services/product.service';



@NgModule({
  declarations: [ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductListComponent, ProductComponent],
  providers: [ProductService]
})
export class ProductsModule { }
