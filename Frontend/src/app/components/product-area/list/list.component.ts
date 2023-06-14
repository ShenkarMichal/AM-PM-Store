import { Component, OnInit } from '@angular/core';
import { CategoryModel } from 'src/app/models/category-model';
import { ProductModel } from 'src/app/models/product-model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  public products: ProductModel[]

  public categories: CategoryModel[]

  public categoryId: string

  public constructor(private productService: ProductsService){ }

  async ngOnInit(): Promise<void> {
    try {
      this.products = await this.productService.getAllProducts()  
      this.categories = await this.productService.getAllCategories()
    } 
    catch (err: any) {
      console.log(err)      
    }    
  }
  
  public async getProductsByCategory(): Promise<void> {
    try {
      if(!this.categoryId){
        this.products = await this.productService.getAllProducts()
      }
      this.products = await this.productService.getProductsByCategory(this.categoryId)  
    }
    catch (err: any) {
      console.log(err)
    }    
  }

  public async deleteProduct(_id: string): Promise<void> {
    try {
      if(!window.confirm("The product will be delete, Are you sure?")) return
      await this.productService.deleteProduct(_id)  
      this.products = this.products.filter(p => p._id !== _id)
    }
    catch (err: any) {
      console.log(err)
    }    
  }


}
