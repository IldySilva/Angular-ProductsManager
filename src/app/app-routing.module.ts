import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductsCreateComponent } from './components/product/products-create/products-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from "./views/product/product.component";
const routes: Routes = [{
path:"",
component:ProductComponent
},
{

  path:"products",
component:ProductComponent

},
 {
  path:"products/create",
component:ProductsCreateComponent
 },
 {
  path:"products/edit/:id",
component:ProductEditComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
