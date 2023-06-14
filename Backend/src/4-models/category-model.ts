import mongoose from "mongoose"

//1 - interface
export interface ICategoryModel extends mongoose.Document {
    categoryName: string
}

//2 - schema
export const CategorySchema = new mongoose.Schema<ICategoryModel>({
    categoryName: {
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name nust be at least 2 characters"],
        maxlength: [15, "Name must be only 15 characters"]        
    }
})

//3 - model
export const CategoryModel = mongoose.model<ICategoryModel>("CategoryModel", CategorySchema,"categories")
