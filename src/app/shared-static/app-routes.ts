import { ProductListComponent } from '../products/components/product-list/product-list.component';
import { Routes } from '@angular/router';
import { CartListComponent } from '../cart/cart-list/cart-list.component';

class AppRoute {
    constructor(
        public path: string,
        public component: any
    ) {
    }
}

export const appRoutes: Routes = [
    new AppRoute('products', ProductListComponent),
    new AppRoute('cart', CartListComponent),
];
