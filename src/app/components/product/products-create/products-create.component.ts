import { AppComponent } from './../../../app.component';
import { HeaderservicesService } from './../../../services/view/headerData/headerservices.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { Location } from '@angular/common'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ImagePickerConf } from 'ngp-image-picker';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductsCreateComponent implements OnInit {


categories=["Food","Clouthes","Tech","Digital","Kitchen","Other"]

  public ownerForm: FormGroup;

  productToAdd: Product = {
    name: '',
    supplier:"",
    
  }
  constructor(private router: Router, private location: Location, private productServices: ProductsService, private headerServices: HeaderservicesService) {

    headerServices.headerData.title = "Add new product to list"
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, ]),
      category:new FormControl('',[Validators.required])

    });
  }
  public hasError = (controlName: string, errorName: string) =>{
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

source:any;

  ngOnInit(): void {

  
  }
get buttonIsDisabled():boolean{

  return this.productToAdd.name.length<1;
}

  
  onImageChange(event:any){

this.productToAdd.base64Image=event;
  }
imagePickerConf: ImagePickerConf = {
  borderRadius: '4px',
  language: 'en',
  width: '180px',
  height: '180px',
  hideDownloadBtn: true,
  hideEditBtn:true,
  hideAddBtn: true,
  objectFit:"fill"
};


  saveProduct() {

    console.log(this.productToAdd.category);
setTimeout(() => {
this.headerServices.isLoading=true;

  this.productToAdd.createdDate=new Date().toISOString().slice(0, 10)
  
 this.productServices.create(this.productToAdd).subscribe(prod => {
  this.productToAdd = prod;
this.returnToPreviousPage();

      this.productServices.dialogs.showMessage("Producted Saved")

      this.headerServices.isLoading=false;
    });
}, );
  
this.headerServices.isLoading=false;


    console.log(this.productToAdd)
  }

  returnToPreviousPage(): void {
    this.location.back();
  }




}
