import { uuid } from 'src/app/shared-static';

export class ProductListModel {
    public id: string;
    public name: string;

    /**
     * Create new products list model with uniq ID
     */
    constructor(name: string) {
        this.id = uuid();
        this.name = name;
    }
}
