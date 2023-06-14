import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { CategoryModel } from '../models/category-model';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../utils/config';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public async getAllProducts(): Promise<ProductModel[]>{
    
    const observable = this.http.get<ProductModel[]>(appConfig.productsURL)
    const products =await firstValueFrom(observable)

    return products
  }

  public async getAllCategories(): Promise<CategoryModel[]>{
    
    const observable = this.http.get<CategoryModel[]>(appConfig.categoriesURL)
    const categories = await firstValueFrom(observable)

    return categories
  }

  public async getProductsByCategory(categoryId: string): Promise<ProductModel[]> {
    const observable = this.http.get<ProductModel[]>(appConfig.productsURL + categoryId)
    const products = await firstValueFrom(observable)

    return products
  }

  public async addNewProduct(product: ProductModel): Promise<ProductModel> {
    const observable = this.http.post<ProductModel>(appConfig.productsURL, product)
    const newProduct =await firstValueFrom(observable)

    return newProduct
  }

  public async deleteProduct(_id: string): Promise<void> {
    const observable = this.http.delete<void>(appConfig.productsURL + _id)
    await firstValueFrom(observable)
  }
}
