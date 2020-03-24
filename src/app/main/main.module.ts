import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ShopRootComponent } from './shop-root/shop-root.component';
import { ProductsModule } from '../products/products.module';
import { CartModule } from '../cart/cart.module';

@NgModule({
  declarations: [
    ShopRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [ShopRootComponent]
})
export class MainModule { }
