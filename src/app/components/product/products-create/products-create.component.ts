import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Location } from '@angular/common'
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {


  
  productToAdd:Product={
    name: ''
  }
  constructor(private router: Router, private location: Location,private productServices:ProductsService) { 

  }


  ngOnInit(): void {
 
  }
saveProduct(){

  this.productServices.create(this.productToAdd).subscribe(prod=>{
this.productToAdd=prod;
this.productServices.dialogs.showMessage("Producted Saved")

  });
  console.log(this.productToAdd)
}

  returnToPreviousPage(): void {
    this.location.back();
  }

 
}
