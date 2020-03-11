import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ShopRootComponent } from './shop-root/shop-root.component';

@NgModule({
  declarations: [
    ShopRootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ShopRootComponent]
})
export class MainModule { }
