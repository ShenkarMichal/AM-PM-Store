import mongoose from 'mongoose'
import { CategoryModel } from './category-model'

//1- interface

export interface IProductModel extends mongoose.Document {
    name: string
    production: Date
    expire: Date
    categoryId: mongoose.Schema.Types.ObjectId
    price: number
}

//2-schema
export const ProductSchema = new mongoose.Schema<IProductModel>({
    name:{
        type: String,
        required: [true, "Name is required"],
        minlength: [2, "Name nust be at least 2 characters"],
        maxlength: [15, "Name must be only 15 characters"] 
    },
    production: {
        type: Date,
        required: [true, "Production date is required"]
    },
    expire: {
        type: Date,
        required: [true, "Expire date is required"]
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [0, "Price can't be negative"],
        max: [2000, "Price can't be more than 2,000$"]
    }
},{
    versionKey: false,
    toJSON: {virtuals: true},
    id: false
})

ProductSchema.virtual("categories", {
    ref: CategoryModel,
    localField: "categoryId",
    foreignField: "_id",
    justOne: true
})

export const ProductModel = mongoose.model<IProductModel>("ProductModel", ProductSchema, "products")