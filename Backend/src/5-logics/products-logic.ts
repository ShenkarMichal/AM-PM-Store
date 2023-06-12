import { IProductModel, ProductModel } from "../4-models/product-model";

function getAllProducts(): Promise<IProductModel[]> {

    return ProductModel.find().exec()
}

export default {
    getAllProducts
}