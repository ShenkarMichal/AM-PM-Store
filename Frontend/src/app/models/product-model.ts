
export class ProductModel {
    public _id: string
    public name: string
    public production: Date
    public expire: Date
    public categoryId: string
    public price: number

    public categories: {
        _id: string
        categoryName: string
    }
}