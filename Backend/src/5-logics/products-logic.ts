import { CategoryModel, ICategoryModel } from "../4-models/category-model";
import { IProductModel, ProductModel } from "../4-models/product-model";

function getAllProducts(): Promise<IProductModel[]> {

    return ProductModel.find().exec()
}

function getAllCategories(): Promise<ICategoryModel[]> {

    return CategoryModel.find().exec()
}

export default {
    getAllProducts,
    getAllCategories
}