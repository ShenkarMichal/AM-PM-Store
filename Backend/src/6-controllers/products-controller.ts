import express, { NextFunction, Request, Response } from 'express'
import productsLogic from '../5-logics/products-logic'
import { ProductModel } from '../4-models/product-model'

const router = express.Router()

//Get all products:
router.get("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await productsLogic.getAllProducts()
        response.json(products)    
    }
    catch (err: any) {
        next(err)        
    }
})

//Get all categories:
router.get("/categories", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categories = await productsLogic.getAllCategories()
        response.json(categories)    
    }
    catch (err: any) {
        next(err)        
    }
})

//Add new product:
router.post("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const product = new ProductModel(request.body)
        const newProduct = await productsLogic.addProduct(product)
        response.json(newProduct)    
    }
    catch (err: any) {
        next(err)        
    }
})

//Get product by category:
router.get("/products/:categoryId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categoryId = request.params.categoryId
        const products = await productsLogic.getProductsByCategory(categoryId)
        response.json(products)    
    }
    catch (err: any) {
        next(err)        
    }
})

//Delete product:
router.delete("/products/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const _id = request.params._id
        await productsLogic.deleteProduct(_id)
        response.sendStatus(204)  
    }
    catch (err: any) {
        next(err)        
    }
})

//Get product by category:
router.get("/products/:categoryId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const categoryId = request.params.categoryId
        const products = await productsLogic.getProductsByCategory(categoryId)
        response.json(products)    
    }
    catch (err: any) {
        next(err)        
    }
})

export default router
