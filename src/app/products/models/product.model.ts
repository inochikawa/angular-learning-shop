import { uuid } from 'src/app/shared-static';

export enum ProductType {
    TV = 1,
    Smartphone,
    Car,
    Laptop
}

export class ProductModel {
    public id: string = uuid();
    public name: string;
    public type: ProductType;
    public price: number = 0;
    public isSelected: boolean = false;

    /**
     * Create new product model with uniq ID
     */
    constructor(name: string, type: ProductType, price: number) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}
