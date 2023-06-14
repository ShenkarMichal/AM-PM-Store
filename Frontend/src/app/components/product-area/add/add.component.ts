import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryModel } from 'src/app/models/category-model';
import { ProductModel } from 'src/app/models/product-model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  public categories: CategoryModel[]

  public newProduct = new ProductModel

  public constructor(private productService: ProductsService, private router: Router) {}
  async ngOnInit(): Promise<void> {
    try {
      this.categories = await this.productService.getAllCategories()      
    }
    catch (err: any) {
      console.log(err)
    }    
  }

  public async send(): Promise<void> {
    try {
      await this.productService.addNewProduct(this.newProduct)
      alert("The product has been successfully added")  
      this.router.navigateByUrl("/products")
    }
    catch (err: any) {
      console.log(err)
      
    }
  }


}
