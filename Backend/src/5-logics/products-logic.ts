import { CategoryModel, ICategoryModel } from "../4-models/category-model";
import { ResourceNotFoundErrorModel, ValidateErrorModel } from "../4-models/errors-model";
import { IProductModel, ProductModel } from "../4-models/product-model";

function getAllProducts(): Promise<IProductModel[]> {

    return ProductModel.find().exec()
}

function getAllCategories(): Promise<ICategoryModel[]> {

    return CategoryModel.find().exec()
}

function addProduct(product: IProductModel): Promise<IProductModel> {
    const errors = product.validateSync()
    if(errors) throw new ValidateErrorModel(errors.message)

    return product.save()
}

function getProductsByCategory(categoryId: string): Promise<IProductModel[]>{
    return ProductModel.find({categoryId}).populate("categories").exec()
}

async function deleteProduct(_id: string): Promise<void> {
    const deleteProduct = await ProductModel.findByIdAndDelete(_id)
    if(!deleteProduct) throw new ResourceNotFoundErrorModel(_id)
}


export default {
    getAllProducts,
    getAllCategories,
    addProduct,
    getProductsByCategory,
    deleteProduct
}