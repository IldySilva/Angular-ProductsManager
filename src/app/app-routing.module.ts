import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductsCreateComponent } from './components/product/products-create/products-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from "./views/product/product.component";
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
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
 },{

  path:"products/consult/:id",
component:ProductDetailsComponent

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
