import { uuid } from 'src/app/shared-static';

export enum ProductType {
    TV = 1,
    Smartphone,
    Car,
    Laptop
}

export class ProductModel {
    public id: string;
    public name: string;
    public type: ProductType;

    /**
     * Create new product model with uniq ID
     */
    constructor(name: string, type: ProductType) {
        this.id = uuid();
        this.name = name;
        this.type = type;
    }
}
