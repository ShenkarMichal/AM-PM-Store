import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/product-area/list/list.component';
import { AddComponent } from './components/product-area/add/add.component';
import { PageNotFoundComponent } from './components/layout-area/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: "products", component: ListComponent},
  {path: "new", component: AddComponent},
  {path: "", redirectTo: "products", pathMatch: "full"},
  {path: "*", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
